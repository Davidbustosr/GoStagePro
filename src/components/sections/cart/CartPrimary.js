"use client"; // Este componente se ejecuta en el cliente (Next.js).

import CartProduct from "@/components/shared/cart/CartProduct"; // Componente para los productos del carrito.
import useSweetAlert from "@/hooks/useSweetAlert"; // Hook para mostrar alertas.
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage"; // Función para manejar el localStorage.
import countTotalPrice from "@/libs/countTotalPrice"; // Calcula el precio total.
import { useCartContext } from "@/providers/CartContext"; // Contexto para manejar el carrito.
import Link from "next/link"; // Enlaces internos con Next.js.
import React from "react"; // Importa React para el componente.

const CartPrimary = () => {
  const { cartProducts: currentProducts, setCartProducts } = useCartContext(); // Productos y función para actualizar el carrito.
  const creteAlert = useSweetAlert(); // Inicializa las alertas.
  const totalPrice = countTotalPrice(currentProducts); // Calcula el precio total del carrito.
  const isCartProduct = !!currentProducts?.length; // Verifica si el carrito tiene productos.

  // Lógica para actualizar el carrito
  const handleUpdateCart = () => {
    if (!currentProducts || currentProducts.length === 0) {
      creteAlert("error", "El carrito está vacío. No hay nada que actualizar.");
      return;
    }

    // Actualiza el almacenamiento local con los datos actuales
    addItemsToLocalstorage("cart", currentProducts);

    // Simula un proceso para recalcular totales o validar datos
    const updatedProducts = currentProducts.map((product) => {
      // Ejemplo: Validar cantidad mínima
      if (product.quantity < 1) {
        product.quantity = 1; // Ajusta la cantidad mínima.
      }
      return product;
    });

    // Actualiza el estado global del carrito con los productos actualizados
    setCartProducts(updatedProducts);

    // Muestra un mensaje de éxito
    creteAlert("success", "¡Éxito! El carrito se ha actualizado correctamente.");
  };

  // Limpia el carrito eliminando todos los productos
  const handleClearCart = () => {
    addItemsToLocalstorage("cart", []); // Limpia el almacenamiento local.
    setCartProducts([]); // Limpia el estado global.
    creteAlert("success", "¡Éxito! El carrito está vacío.");
  };

  return (
    <div className="cartarea sp_bottom_140 sp_top_100">
      {/* Contenedor principal */}
      <div className="container">
        {/* Tabla del carrito */}
        <div className="row">
          <div className="col-xl-12">
            <div className="cartarea__table__content table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {!isCartProduct ? (
                    <tr className="position-relative">
                      <td className="p-5 md:p-10" style={{ border: 0 }}>
                        <p className="empty">El carrito está vacío.</p>
                      </td>
                    </tr>
                  ) : (
                    currentProducts?.map((product, idx) => (
                      <CartProduct key={idx} product={product} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Controles del carrito */}
        <div className="row">
          <div className="col-lg-12">
            <div className="cartarea__shiping__update__wrapper">
              <div className="cartarea__shiping__update">
                <Link href={"/shop"}>Continuar Comprando</Link>
              </div>
              {isCartProduct && (
                <div className="cartarea__clear">
                  <button onClick={handleUpdateCart}>Actualizar Carro</button>
                  <button onClick={handleClearCart}>Vaciar Carro</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Totales del carrito */}
        <div className="row">
          <div className="col-lg-12">
            <div className="cartarea__grand__totall">
              <div className="cartarea__title">
                <h4>Total del Carrito</h4>
              </div>
              <h5>
                Total: <span>${totalPrice?.toFixed(2) || "0.00"}</span>
              </h5>
              <Link href="/checkout">Proceder al Pago</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPrimary; // Exporta el componente para usarlo en otras partes de la aplicación.