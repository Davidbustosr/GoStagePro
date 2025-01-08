"use client";
import { PayPalButtons } from "@paypal/react-paypal-js"; 
import countTotalPrice from "@/libs/countTotalPrice";
import getAllProducts from "@/libs/getAllProducts";
import { useCartContext } from "@/providers/CartContext";
import { useSearchParams } from "next/navigation";
import React from "react";

const ChecoutPrimary = () => {
  // ============================================================
  // = LÓGICA PARA CALCULAR EL TOTAL =
  // ============================================================
  const allProducts = getAllProducts();
  const searchParams = useSearchParams();
  const currentId = parseInt(searchParams.get("id"));
  const currentQuantity = parseInt(searchParams.get("quantity"));
  const { cartProducts: products } = useCartContext();
  const currentProduct = allProducts?.find(({ id }) => id === currentId);

  const subtotal = countTotalPrice(
    currentId ? [{ ...currentProduct, quantity: currentQuantity }] : products
  );
  const totalPrice = subtotal ? subtotal : 0;

  // ============================================================
  // = RENDER =
  // ============================================================
  return (
    <div className="checkoutarea sp_bottom_140 sp_top_100">
      <div className="container">
        <div className="row">
          {/* Resumen del pedido */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="checkoutarea__payment__wraper">
              <div className="checkoutarea__total">
                <h3>Resumen de la Compra</h3>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                  }}
                >
                  <table className="checkoutarea__table" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left" }}>Producto</th>
                        <th style={{ textAlign: "right" }}>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProduct ? (
                        <tr>
                          <td>{currentProduct.title}</td>
                          <td style={{ textAlign: "right" }}>{currentQuantity}</td>
                        </tr>
                      ) : (
                        products.map((product, index) => (
                          <tr key={index}>
                            <td>{product.title}</td>
                            <td style={{ textAlign: "right" }}>{product.quantity}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  <hr style={{ margin: "20px 0" }} />
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "left", fontWeight: "bold" }}>Subtotal:</td>
                        <td style={{ textAlign: "right" }}>${subtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left", fontWeight: "bold" }}>Total:</td>
                        <td style={{ textAlign: "right" }}>${totalPrice.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="checkoutarea__payment clearfix"
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  marginTop: "20px",
                }}
              >
                {/* Botón de PayPal */}
                <PayPalButtons
                  style={{ layout: "vertical", color: "gold" }}
                  createOrder={async () => {
                    // Llamas a tu API para crear la orden
                    // (usa tu endpoint /api/paypal/create-order como hacías antes)
                    const response = await fetch("/api/paypal/create-order", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ total: totalPrice }),
                    });
                    const orderData = await response.json();
                    console.log("Orden creada:", orderData);
                    return orderData.id; // Devuelve el ID de la orden creada
                  }}
                  onApprove={async (data) => {
                    // Llamas a tu API para capturar la orden
                    const response = await fetch(`/api/paypal/capture-order`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ orderID: data.orderID }),
                    });
                    const orderData = await response.json();

                    if (orderData.error) {
                      console.error("Error en la captura del pago:", orderData.error);
                      window.location.href = "/error";
                    } else {
                      console.log("Pago capturado exitosamente:", orderData);
                      window.location.href = "/success"; // Redirige a la página de éxito
                    }
                  }}
                  onError={(err) => {
                    console.error("Error en el pago:", err);
                    window.location.href = "/error"; // Redirige a la página de error
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecoutPrimary;