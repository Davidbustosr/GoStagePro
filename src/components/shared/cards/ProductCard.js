"use client";

// Importa el contexto del carrito para manejar la funcionalidad de agregar productos al carrito
import { useCartContext } from "@/providers/CartContext";
// Importa el componente Image de Next.js para manejar imágenes optimizadas
import Image from "next/image";
// Importa el componente Link de Next.js para manejar la navegación entre páginas
import Link from "next/link";

const ProductCard = ({ product }) => {
  // Obtiene la función para agregar productos al carrito desde el contexto
  const { addProductToCart } = useCartContext();

  // Desestructura las propiedades del producto para facilitar su uso en el componente
  const {
    id, // Identificador único del producto
    title, // Título o nombre del producto
    price, // Precio actual del producto
    image, // Imagen del producto
    status, // Estado del producto (ejemplo: "sale", "new")
    type, // Tipo o categoría del producto
    previousPrice, // Precio anterior del producto (si aplica)
    reviews, // Número de reseñas del producto
    disc, // Porcentaje de descuento (si aplica)
  } = product;

  // Calcula el precio después del descuento si existe
  const priceAfterDisc = disc ? price * ((100 - disc) / 100) : price;
  // Formatea el precio para mostrarlo con dos decimales
  const currentPrice = priceAfterDisc.toFixed(2);

  // Define las etiquetas posibles para el estado del producto y sus estilos
  const depts = [
    { name: "sale", bg: "" }, // Sin color de fondo para "sale"
    { name: "new", bg: "blue__color" }, // Color azul para "new"
    { name: "sold out", bg: "green__color" }, // Color verde para "sold out"
    { name: "% off", bg: "yellow__color" }, // Color amarillo para "% off"
  ];

  // Busca el estilo correspondiente al estado actual del producto
  const currentDept = depts?.find(
    (dept) =>
      status?.toLowerCase()?.includes(dept?.name) ||
      dept.name === status.toLowerCase()
  );

  return (
    <div className="gridarea__wraper product__grid">
      {/* Contenedor de la imagen del producto */}
      <div className="gridarea__img">
        {/* Enlace al detalle del producto */}
        <Link href={`/products/${id}`}>
          <Image loading="lazy" src={image} alt="grid" placeholder="blur" />
        </Link>
        {/* Muestra una etiqueta con el estado del producto */}
        <div className="gridarea__small__button gridarea__small__button__1">
          <div className={`grid__badge ${currentDept?.bg}`}>{status}</div>
        </div>

        {/* Botón para agregar el producto al carrito */}
        <div className="product__grid__action">
          <ul>
            <li>
              <button
                onClick={() =>
                  addProductToCart({
                    ...product, // Pasa toda la información del producto
                    quantity: 1, // Establece la cantidad en 1 al agregar al carrito
                  })
                }
                className="grid__cart" // Clase para el estilo del botón
                data-bs-toggle="tooltip" // Agrega un tooltip (opcional)
                data-bs-placement="top" // Posición del tooltip
                title="Add to cart" // Texto del tooltip
              >
                Add to cart
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Contenedor para la información textual del producto */}
      <div className="gridarea__content">
        {/* Título del producto */}
        <div className="gridarea__heading">
          <h3>
            <Link href={`/products/${id}`}>
              {/* Corta el título si excede los 21 caracteres */}
              {title?.length > 21 ? title?.slice(0, 21) : title}
            </Link>
          </h3>
        </div>

        {/* Muestra el precio actual y el precio anterior si aplica */}
        <div className="gridarea__price">
          ${currentPrice} {disc ? <del>/ ${price.toFixed(2)}</del> : ""}
        </div>

        {/* Contenedor inferior con la categoría y las estrellas */}
        <div className="gridarea__bottom">
          {/* Muestra la categoría del producto */}
          <Link href={`/shop?category=${type.toLowerCase()}`}>{type}</Link>

          {/* Muestra una valoración visual en estrellas basada en el número de reseñas */}
          <div className="gridarea__star">
            <i className="icofont-star"></i> <i className="icofont-star"></i>{" "}
            <i className="icofont-star"></i> <i className="icofont-star"></i>{" "}
            <i className="icofont-star"></i> <span>({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; // Exporta el componente para su uso en otras partes de la aplicación