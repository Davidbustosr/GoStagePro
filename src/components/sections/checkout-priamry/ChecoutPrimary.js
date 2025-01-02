"use client";
import countTotalPrice from "@/libs/countTotalPrice";
import getAllProducts from "@/libs/getAllProducts";
import { useCartContext } from "@/providers/CartContext";
import { useSearchParams } from "next/navigation";
import React from "react";

const ChecoutPrimary = () => {
  const allProducts = getAllProducts(); // Obtiene todos los productos disponibles.
  const searchParams = useSearchParams(); // Obtiene parámetros de la URL.
  const currentId = parseInt(searchParams.get("id")); // Obtiene el ID del producto actual.
  const currentQuantity = parseInt(searchParams.get("quantity")); // Obtiene la cantidad del producto actual.
  const currentColor = searchParams.get("color"); // Obtiene el color seleccionado.
  const currentSize = searchParams.get("size"); // Obtiene el tamaño seleccionado.
  const { cartProducts: products } = useCartContext(); // Obtiene los productos del carrito.
  const currentProduct = allProducts?.find(({ id }) => id === currentId); // Busca el producto actual por ID.
  const { title, price, disc } = currentProduct ? currentProduct : {}; // Obtiene los detalles del producto actual.

  const isProducts = currentProduct || products?.length ? true : false; // Verifica si hay productos en el carrito o un producto actual.
  const subtotal = countTotalPrice(
    currentId ? [{ ...currentProduct, quantity: currentQuantity }] : products
  ); // Calcula el subtotal.
  const totalPrice = subtotal ? subtotal : 0; // Total igual al subtotal.

  return (
    <div className="checkoutarea sp_bottom_140 sp_top_100">
      <div className="container">
        <div className="row">
          {/* Detalles de facturación */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="checkoutarea__billing">
              <div className="checkoutarea__billing__heading">
                <h2>Detalles de facturación</h2>
              </div>
              <div className="checkoutarea__billing__form">
                <form action="#">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="first__name">Primer nombre *</label>
                        <input
                          type="text"
                          id="first__name"
                          name="namm"
                          className="info"
                          placeholder="Primer nombre"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="last__name">Segundo nombre *</label>
                        <input
                          type="text"
                          id="last__name"
                          name="namm"
                          className="info"
                          placeholder="Segundo nombre"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="company__name">Nombre de la Compañía</label>
                        <input
                          type="text"
                          id="company__name"
                          name="namm"
                          className="info"
                          placeholder="Nombre de la Compañía"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="email__address">Email *</label>
                        <input
                          type="text"
                          id="email__address"
                          name="namm"
                          className="info"
                          placeholder="Tu correo electrónico"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="phone__number">Número de Teléfono (Whatsapp) *</label>
                        <input
                          type="text"
                          id="phone__number"
                          name="namm"
                          className="info"
                          placeholder="Número de Teléfono"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="address__info">Dirección *</label>
                        <input
                          type="text"
                          id="address__info"
                          name="namm"
                          className="info"
                          placeholder="Dirección"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="town__city">Ciudad *</label>
                        <input
                          type="text"
                          id="town__city"
                          name="namm"
                          className="info"
                          placeholder="Ciudad"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="post__code">Código Postal *</label>
                        <input
                          type="text"
                          id="post__code"
                          name="namm"
                          className="info"
                          placeholder="Código Postal"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="order__note">Comentarios</label>
                        <input
                          type="text"
                          id="order__note"
                          name="namm"
                          className="info"
                          placeholder="Notas para el pedido"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="checkoutarea__payment__wraper">
              <div className="checkoutarea__total">
                <h3>Tu compra</h3>
                <div className="checkoutarea__table__wraper">
                  <table className="checkoutarea__table">
                    <thead>
                      <tr className="checkoutarea__item">
                        <td className="checkoutarea__ctg__type">Producto</td>
                        <td className="checkoutarea__cgt__des">Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      {!isProducts ? (
                        <tr className="checkoutarea__item prd-name">
                          <td className="checkoutarea__ctg__type">
                            Producto × <span>0</span>
                          </td>
                          <td className="checkoutarea__cgt__des">$0.00</td>
                        </tr>
                      ) : currentProduct ? (
                        <tr className="checkoutarea__item prd-name">
                          <td className="checkoutarea__ctg__type">
                            {title?.length > 12
                              ? title?.slice(0, 12)
                              : title}{" "}
                            × <span>{currentQuantity}</span>
                          </td>
                          <td className="checkoutarea__cgt__des">
                            ${totalPrice.toFixed(2)}
                          </td>
                        </tr>
                      ) : (
                        products?.map(
                          ({ quantity, title, price, disc }, idx) => {
                            const totalPriceSingle = countTotalPrice([
                              { price, quantity, disc },
                            ]);
                            return (
                              <tr
                                key={idx}
                                className="checkoutarea__item prd-name"
                              >
                                <td className="checkoutarea__ctg__type">
                                  {title?.length > 12
                                    ? title?.slice(0, 12)
                                    : title}{" "}
                                  × <span>{quantity}</span>
                                </td>
                                <td className="checkoutarea__cgt__des">
                                  ${totalPriceSingle.toFixed(2)}
                                </td>
                              </tr>
                            );
                          }
                        )
                      )}
                      <tr className="checkoutarea__item">
                        <td className="checkoutarea__ctg__type">Subtotal</td>
                        <td className="checkoutarea__cgt__des">
                          ${subtotal.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="checkoutarea__item">
                        <td className="checkoutarea__itemcrt-total">Total</td>
                        <td className="checkoutarea__cgt__des prc-total">
                          $ {totalPrice.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="checkoutarea__payment clearfix">
                <div className="checkoutarea__payment__toggle">
                  <form action="#">
                    <div className="checkoutarea__payment__total">
                      {/* Opciones de pago: PayPal */}
                      <div className="checkoutarea__payment__type">
                        <input
                          type="radio"
                          id="pay-toggle04"
                          name="pay"
                          defaultChecked
                        />
                        <label htmlFor="pay-toggle04">Paypal</label>
                      </div>
                      {/* Opciones de pago: Tarjeta de crédito/débito */}
                      <div className="checkoutarea__payment__type">
                        <input type="radio" id="pay-toggle05" name="pay" />
                        <label htmlFor="pay-toggle05">
                          Tarjeta de Débito/Crédito
                        </label>
                      </div>
                    </div>
                    <div className="checkoutarea__payment__input__box">
                      <button
                        className="default__button"
                        type="submit"
                        style={{
                          opacity: isProducts ? 1 : "0.5",
                          cursor: isProducts ? "pointer" : "not-allowed",
                        }}
                        disabled={!isProducts}
                      >
                        Realizar Pedido
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecoutPrimary;