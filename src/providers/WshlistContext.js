"use client"; // Indica que este código se ejecutará en el cliente (navegador)

// Importaciones necesarias
import useSweetAlert from "@/hooks/useSweetAlert"; // Hook para mostrar alertas
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage"; // Función para agregar elementos al localStorage
import getItemsFromLocalstorage from "@/libs/getItemsFromLocalstorage"; // Función para obtener elementos del localStorage
import { createContext, useContext, useEffect, useState } from "react"; // Hooks de React para manejar contexto y estados
import getAllProducts from "@/libs/getAllProducts"; // Función para obtener todos los productos

// Crea un contexto para manejar la lista de deseos (wishlist)
const wishlistContext = createContext(null);

// Proveedor del contexto de la lista de deseos
const WishlistContextProvider = ({ children }) => {
  // Estado para manejar los productos en la lista de deseos
  const [wishlistProducts, setWishlistProducts] = useState([]);

  // Hook para mostrar alertas personalizadas
  const creteAlert = useSweetAlert();

  // Hook que se ejecuta al montar el componente
  useEffect(() => {
    // Obtiene productos de ejemplo (los dos primeros productos) y les asigna una cantidad de 1
    const demoProducts = getAllProducts()
      ?.slice(0, 2)
      ?.map((product, idx) => ({ ...product, quantity: 1 }));

    // Intenta obtener los productos guardados en el localStorage
    const wishlistProductFromLocalStorage =
      getItemsFromLocalstorage("wishlist");

    // Si no hay productos en el localStorage, inicializa con productos de ejemplo
    if (!wishlistProductFromLocalStorage) {
      setWishlistProducts(demoProducts); // Configura los productos iniciales en el estado
      addItemsToLocalstorage("wishlist", demoProducts); // Guarda los productos en el localStorage
    } else {
      setWishlistProducts(wishlistProductFromLocalStorage); // Si hay productos en el localStorage, usa esos datos
    }
  }, []);

  // Función para agregar un producto a la lista de deseos
  const addProductToWishlist = (currentProduct) => {
    const { id: currentId, title: currentTitle } = currentProduct;

    // Busca si el producto ya existe en la lista de deseos
    const modifyableProduct = wishlistProducts?.find(
      ({ id, title }) => id === currentId && title === currentTitle
    );

    const isAlreadyExist = modifyableProduct ? true : false;

    // Si el producto ya existe, muestra un mensaje de error
    if (isAlreadyExist) {
      creteAlert("error", "Failed! Already exist in wishlist.");
    } else {
      // Si no existe, lo agrega a la lista de deseos
      let currentProducts = [...wishlistProducts, currentProduct];
      setWishlistProducts(currentProducts); // Actualiza el estado con los nuevos productos
      addItemsToLocalstorage("wishlist", currentProducts); // Guarda los nuevos productos en el localStorage
      creteAlert("success", "Success! Added to wishlist."); // Muestra mensaje de éxito
    }
  };

  // Función para eliminar un producto de la lista de deseos
  const deleteProductFromWishlist = (currentId, currentTitle) => {
    // Filtra los productos para eliminar el que coincida con el ID y título proporcionados
    const currentProducts = wishlistProducts?.filter(
      ({ id, title }) => id !== currentId || title !== currentTitle
    );
    setWishlistProducts(currentProducts); // Actualiza el estado
    addItemsToLocalstorage("wishlist", currentProducts); // Actualiza el localStorage
    creteAlert("success", "Success! Deleted from wishlist."); // Muestra mensaje de éxito
  };

  // Retorna el proveedor del contexto con las funciones y datos disponibles
  return (
    <wishlistContext.Provider
      value={{
        wishlistProducts, // Lista de productos en la lista de deseos
        setWishlistProducts, // Función para actualizar directamente los productos
        addProductToWishlist, // Función para agregar un producto
        deleteProductFromWishlist, // Función para eliminar un producto
      }}
    >
      {children} {/* Renderiza los componentes hijos envueltos en el contexto */}
    </wishlistContext.Provider>
  );
};

// Hook personalizado para consumir el contexto de la lista de deseos
export const useWishlistContext = () => {
  const value = useContext(wishlistContext); // Obtiene el valor del contexto
  return value;
};

// Exporta el proveedor del contexto
export default WishlistContextProvider;