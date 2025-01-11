"use client";
// Este archivo es un componente de cliente en Next.js.

// Importaciones necesarias
import Image from "next/image"; // Para manejar imágenes optimizadas.
import { Swiper, SwiperSlide } from "swiper/react"; // Componente Swiper para carruseles.
import { Thumbs } from "swiper/modules"; // Módulo de Swiper para manejar miniaturas.
import { useEffect, useState } from "react"; // Hooks de React.
import getAllProducts from "@/libs/getAllProducts"; // Función para obtener la lista de productos.
import { useCartContext } from "@/providers/CartContext"; // Contexto para manejar el carrito de compras.

const ProductDetailsModal = ({ product }) => {
  // Obtiene las funciones y estados del contexto del carrito.
  const { addProductToCart } = useCartContext();

  // Desestructuración del producto para facilitar el uso de sus propiedades.
  const {
    id, // ID único del producto.
    title, // Título o nombre del producto.
    price, // Precio actual del producto.
    image, // Imagen principal del producto.
    status, // Estado del producto (por ejemplo: "sale", "new").
    disc, // Porcentaje de descuento del producto (si aplica).
    productType, // Tipo o categoría del producto.
  } = product;

  // Estados locales
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada.
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Estado para manejar el carrusel de miniaturas.

  // Calcula el precio después del descuento (si aplica).
  const priceAfterDisc = disc ? price * ((100 - disc) / 100) : price;
  const currentPrice = priceAfterDisc.toFixed(2); // Formatea el precio con 2 decimales.

  // Crea una lista de imágenes para mostrar en el carrusel.
  const slides = [
    product, // Producto actual.
    ...getAllProducts() // Filtra otros productos para mostrarlos como sugerencias.
      ?.filter(({ id: idx }) => idx !== id) // Excluye el producto actual.
      .slice(0, 6), // Selecciona hasta 6 productos adicionales.
  ];

  // UseEffect para inicializar la cantidad a 1 cada vez que se carga el componente.
  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <div
      className="grid__quick__view__modal modalarea modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModal"
      aria-hidden="true"
    >
      {/* Contenedor principal del modal */}
      <div className="modal-dialog modal__wraper">
        <div className="modal-content">
          {/* Botón para cerrar el modal */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="row">
              {/* Columna izquierda: Carrusel de imágenes */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="featurearea__details__img">
                  {/* Carrusel de imágenes principales */}
                  <Swiper
                    className=" modal__gallery__big"
                    wrapperClass="featurearea__big__img--modal"
                    spaceBetween={10}
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                  >
                    {slides?.map(({ image }, idx) => (
                      <SwiperSlide
                        className="featurearea__single__big__img "
                        key={idx}
                      >
                        <Image
                          loading="lazy"
                          src={image}
                          alt="Product Big Img"
                          placeholder="blur"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Carrusel de miniaturas */}
                  <Swiper
                    className="modal__gallery"
                    wrapperClass="featurearea__thumb__img--modal "
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    modules={[Thumbs]}
                    watchSlidesProgress={true}
                    onSwiper={setThumbsSwiper}
                  >
                    {slides?.map(({ image }, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="featurearea__single__thumb__img"
                      >
                        <Image
                          loading="lazy"
                          src={image}
                          alt="Product Thumb Img"
                          placeholder="blur"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Columna derecha: Información del producto */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="featurearea__inner">
                  {/* Tipo de producto */}
                  <div className="featurearea__small__title">
                    <span>{productType}</span>
                  </div>

                  {/* Título del producto */}
                  <div className="featurearea__main__title">
                    <h3>
                      <a href={`/products/${id}`}>{title}</a>
                    </h3>
                  </div>

                  {/* Precio del producto */}
                  <div className="featurearea__price">
                    {disc ? (
                      <span>
                        <del> ${price.toFixed(2)}</del>
                      </span>
                    ) : (
                      ""
                    )}{" "}
                    <span>${currentPrice}</span>{" "}
                    <span className="featurearea__price__button text-uppercase">
                      {status}{" "}
                    </span>{" "}
                    {disc ? (
                      <span className="featurearea__price__button black__color">
                        -{disc}%
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* Descripción del producto */}
                  <div className="featurearea__desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur earum consectetur hic quisquam? Iusto fugiat
                      praesentium a odit iste earum.
                    </p>
                  </div>

                  {/* Sección para seleccionar cantidad */}
                  <div className="featurearea__size">
                    <span>Quantity</span>
                  </div>
                  <div className="featurearea__quantity">
                    <div className="featurearea__quantity__button cartarea__plus__minus qty-container">
                      {/* Botón para disminuir la cantidad */}
                      <div
                        className="dec qtybutton qty-btn-minus"
                        onClick={() =>
                          setQuantity(
                            !quantity || quantity < 2
                              ? 1
                              : parseInt(quantity) - 1
                          )
                        }
                      >
                        -{" "}
                      </div>

                      {/* Input para la cantidad */}
                      <input
                        className="input-qty input-qty"
                        type="text"
                        defaultValue="1"
                        name="qty"
                        onChange={(e) =>
                          setQuantity(
                            !parseInt(e.target.value)
                              ? 1
                              : parseInt(e.target.value)
                          )
                        }
                      />

                      {/* Botón para aumentar la cantidad */}
                      <div
                        className="inc qtybutton qty-btn-plus"
                        onClick={() =>
                          setQuantity(!quantity ? 1 : parseInt(quantity) + 1)
                        }
                      >
                        +
                      </div>
                    </div>

                    {/* Botón para agregar al carrito */}
                    <button
                      className="default__button"
                      onClick={() => {
                        addProductToCart({
                          id,
                          title,
                          price,
                          quantity,
                          image,
                        });
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>

                  {/* Botón para ir al checkout */}
                  <div className="featurearea__bottom__button">
                    <a href={`/checkout?id=${id}&quantity=${quantity}`}>
                      Buy it now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal; // Exporta el componente para usarlo en otras partes del proyecto.