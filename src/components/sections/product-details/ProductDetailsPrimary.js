"use client";

// Importaciones necesarias
import getAllProducts from "@/libs/getAllProducts"; // Función para obtener todos los productos.
import { useCartContext } from "@/providers/CartContext"; // Contexto para manejar el carrito de compras.
import Image from "next/image"; // Componente de Next.js para manejar imágenes optimizadas.
import Link from "next/link"; // Componente para manejar enlaces.
import { useParams } from "next/navigation"; // Hook para acceder a los parámetros de la ruta.
import { useEffect, useState } from "react"; // Hooks de React para manejar estados y efectos.
import { Thumbs } from "swiper/modules"; // Módulo para manejar miniaturas en Swiper.
import { Swiper, SwiperSlide } from "swiper/react"; // Componentes de Swiper para crear carruseles.

const ProductDetailsPrimary = () => {
  // Obtiene el ID actual del producto desde la URL
  const { id: currentId } = useParams();

  // Obtiene todos los productos y encuentra el producto actual por su ID
  const allProducts = getAllProducts();
  const product = allProducts?.find(({ id }) => id === parseInt(currentId));

  // Desestructuración de las propiedades del producto
  const {
    id, // Identificador único del producto.
    title, // Título o nombre del producto.
    price, // Precio actual del producto.
    image, // Imagen principal del producto.
    status, // Estado del producto (ejemplo: "sale", "new").
    type, // Tipo o categoría del producto.
    previousPrice, // Precio anterior del producto (si aplica).
    reviews, // Número de reseñas del producto.
    disc, // Porcentaje de descuento (si aplica).
    productType, // Categoría principal del producto.
  } = product;

  // Estado para manejar la cantidad seleccionada
  const [quantity, setQuantity] = useState(1);

  // Calcula el precio después del descuento (si aplica)
  const priceAfterDisc = disc ? price * ((100 - disc) / 100) : price;
  const currentPrice = priceAfterDisc.toFixed(2); // Formatea el precio con dos decimales.

  // Estado para manejar el carrusel de miniaturas
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Lista de imágenes a mostrar en el carrusel
  const slides = [
    product, // Imagen principal del producto actual.
    ...getAllProducts() // Filtra otros productos y toma hasta 6 adicionales.
      ?.filter(({ id: idx }) => idx !== id) // Excluye el producto actual.
      .slice(0, 6), // Limita el número de productos.
  ];

  // Reinicia la cantidad a 1 cuando se carga el componente
  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <div className="featurearea featurearea--2 sp_top_100 sp_bottom_100">
      <div className="">
        <div className="container">
          <div className="row">
            {/* Columna izquierda: Carrusel de imágenes */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="featurearea__details__img products__details__gallery">
                {/* Carrusel de imágenes principales */}
                <Swiper
                  className="details__gallery__big"
                  wrapperClass="featurearea__big__img "
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
                  className="details__gallery"
                  wrapperClass="featurearea__thumb__img  "
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
                      className="featurearea__single__thumb__img "
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
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="featurearea__inner">
                {/* Categoría principal del producto */}
                <div className="featurearea__small__title">
                  <span>{productType}</span>
                </div>

                {/* Título del producto */}
                <div className="featurearea__main__title">
                  <h3>{title}</h3>
                </div>

                {/* Precio del producto */}
                <div className="featurearea__price">
                  {/* Muestra el precio anterior si existe */}
                  {disc ? (
                    <span>
                      <del> ${price.toFixed(2)}</del>
                    </span>
                  ) : (
                    ""
                  )}{" "}
                  {/* Muestra el precio actual y otros detalles */}
                  <span>${currentPrice}</span>
                  <span className="featurearea__price__button"> {status} </span>
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

                {/* Sección para seleccionar la cantidad */}
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
                          !quantity || quantity < 2 ? 1 : parseInt(quantity) - 1
                        )
                      }
                    >
                      -{" "}
                    </div>

                    {/* Input para mostrar la cantidad */}
                    <input
                      className="input-qty input-qty"
                      type="text"
                      defaultValue="1"
                      name="qty"
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

                {/* Botón para comprar directamente */}
                <div className="featurearea__bottom__button">
                  <Link href={`/checkout?id=${id}&quantity=${quantity}`}>
                    CREAR PLANTILLA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPrimary; // Exporta el componente para su uso en otras partes de la aplicación.