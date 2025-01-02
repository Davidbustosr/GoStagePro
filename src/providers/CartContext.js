"use client"; // Indica que este código se ejecutará en el cliente (React en el navegador)

import useSweetAlert from "@/hooks/useSweetAlert"; // Hook personalizado para mostrar alertas con estilo
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage"; // Función para agregar datos al localStorage
import getItemsFromLocalstorage from "@/libs/getItemsFromLocalstorage"; // Función para obtener datos del localStorage
import { createContext, useContext, useEffect, useState } from "react"; // Importa funciones y componentes necesarios de React

// Crear el contexto del carrito para compartir estado entre componentes
const cartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  // Estado inicial del carrito, comienza como un arreglo vacío
  const [cartProducts, setCartProducts] = useState([]);

  // Hook para mostrar alertas
  const creteAlert = useSweetAlert();

  // useEffect que se ejecuta al montar el componente
  useEffect(() => {
    // Obtener productos del carrito desde el localStorage
    const cartProductFromLocalStorage = getItemsFromLocalstorage("cart");

    // Si no hay productos en el localStorage, inicializa con un carrito vacío
    if (!cartProductFromLocalStorage) {
      setCartProducts([]); // Asigna un carrito vacío al estado
      addItemsToLocalstorage("cart", []); // Guarda un carrito vacío en el localStorage
    } else {
      // Si hay productos en el localStorage, los asigna al estado
      setCartProducts(cartProductFromLocalStorage);
    }
  }, []); // Dependencia vacía para que solo se ejecute una vez al montar

  // Función para agregar productos al carrito
  const addProductToCart = (currentProduct, isDecreament, isTotalQuantity) => {
    const { id: currentId, title: currentTitle } = currentProduct; // Extrae el id y el título del producto actual

    // Encuentra si el producto ya existe en el carrito
    const modifyableProduct = cartProducts?.find(
      ({ id, title }) => id === currentId && title === currentTitle
    );
    const previousQuantity = modifyableProduct?.quantity; // Cantidad anterior del producto (si existe)
    const currentQuantity = currentProduct?.quantity; // Cantidad actual a agregar

    let currentProducts; // Variable para los productos actualizados

    if (isTotalQuantity) {
      // Si se debe actualizar directamente la cantidad total
      currentProducts = cartProducts?.map((product) =>
        product.id === currentId &&
        product?.title === currentTitle &&
        isTotalQuantity
          ? {
              ...product, // Mantiene el resto de las propiedades
              quantity: currentProduct.quantity, // Actualiza la cantidad
            }
          : product // No modifica los productos que no coinciden
      );

      // Muestra un mensaje dependiendo de si aumentó o disminuyó la cantidad
      if (previousQuantity < currentQuantity) {
        creteAlert("success", "Success! Quantity increased.");
      } else if (previousQuantity > currentQuantity) {
        creteAlert("success", "Success! Quantity decreased.");
      }
    } else {
      // Si no es una actualización total, verifica si ya existe en el carrito
      const isAlreadyExist = modifyableProduct ? true : false;

      if (isAlreadyExist) {
        // Si el producto ya existe, actualiza su cantidad
        currentProducts = cartProducts?.map((product) =>
          product.id === currentId &&
          product?.title === currentTitle &&
          isDecreament
            ? {
                ...product,
                quantity: product.quantity - currentProduct?.quantity, // Reduce la cantidad
              }
            : product.id === currentId && product?.title === currentTitle
            ? {
                ...product,
                quantity: product.quantity + currentProduct?.quantity, // Aumenta la cantidad
              }
            : product // Mantiene otros productos sin cambios
        );
        if (isDecreament) {
          creteAlert("success", "Success! Quantity decreased."); // Alerta para decremento
        } else {
          creteAlert("success", "Success! Quantity increased."); // Alerta para incremento
        }
      } else {
        // Si el producto no existe, lo agrega al carrito
        currentProducts = [...cartProducts, currentProduct];
        creteAlert("success", "Success! added to cart."); // Alerta de éxito
      }
    }
    setCartProducts(currentProducts); // Actualiza el estado del carrito
    addItemsToLocalstorage("cart", currentProducts); // Guarda el carrito actualizado en el localStorage
  };

  // Función para eliminar un producto del carrito
  const deleteProductFromCart = (currentId, currentTitle) => {
    // Filtra los productos para excluir el producto que se desea eliminar
    const currentProducts = cartProducts?.filter(
      ({ id, title }) => id !== currentId || title !== currentTitle
    );

    setCartProducts(currentProducts); // Actualiza el estado del carrito
    addItemsToLocalstorage("cart", currentProducts); // Guarda el carrito actualizado en el localStorage
    creteAlert("success", "Success! deleted from cart."); // Muestra una alerta de éxito
  };

  // Proveedor del contexto del carrito
  return (
    <cartContext.Provider
      value={{
        cartProducts, // Productos actuales en el carrito
        setCartProducts, // Función para establecer productos manualmente
        addProductToCart, // Función para agregar productos al carrito
        deleteProductFromCart, // Función para eliminar productos del carrito
      }}
    >
      {children} {/* Renderiza los hijos envueltos en el contexto */}
    </cartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCartContext = () => {
  const value = useContext(cartContext); // Accede al valor del contexto
  return value;
};

export default CartContextProvider; // Exporta el proveedor del contexto del carrito