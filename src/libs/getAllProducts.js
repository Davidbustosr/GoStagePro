// Importamos el JSON con todos los productos
import allProducts from "@/../public/fakedata/products.json";

// Importamos las imágenes asociadas a los productos
import productImage1 from "@/assets/img/products/1.jpg";
import productImage2 from "@/assets/img/products/2.jpg";
import productImage3 from "@/assets/img/products/3.jpg";
import productImage4 from "@/assets/img/products/4.jpg";
import productImage5 from "@/assets/img/products/5.jpg";
import productImage6 from "@/assets/img/products/6.jpg";
import productImage7 from "@/assets/img/products/7.jpg";
import productImage8 from "@/assets/img/products/8.jpg";
import productImage9 from "@/assets/img/products/9.jpg";
import productImage10 from "@/assets/img/products/10.jpg";
import productImage11 from "@/assets/img/products/11.jpg";
import productImage12 from "@/assets/img/products/12.jpg";
import productImage13 from "@/assets/img/products/13.jpg";
import productImage14 from "@/assets/img/products/14.jpg";
import productImage15 from "@/assets/img/products/15.jpg";
import productImage16 from "@/assets/img/products/16.jpg";

// Función para obtener los primeros 4 productos
const getAllProducts = () => {
  // Lista de imágenes predefinidas para los productos
  const images = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8,
    productImage9,
    productImage10,
    productImage11,
    productImage12,
    productImage13,
    productImage14,
    productImage15,
    productImage16,
    productImage8,
    productImage9,
    productImage10,
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8,
    productImage9,
    productImage10,
    productImage11,
    productImage12,
    productImage13,
    productImage14,
  ];

  // Mapeamos los productos del JSON y les asignamos imágenes y adaptaciones necesarias
  const products = [...allProducts]?.map((product, idx) => ({
    ...product, // Mantenemos todos los datos originales del JSON
    image: images[idx], // Asignamos una imagen según el índice del producto
    priceRange: product.price <= 50 ? "$0-$50" : product.price <= 100 ? "$50-$100" : "$100+", // Generamos un rango de precios para filtrar
    popularity: product.reviews > 50 ? "High" : "Low", // Etiqueta de popularidad basada en el número de reseñas
    rating: product.bestSeller ? "Best Seller" : product.featured ? "Featured" : "Standard", // Clasificación adicional según atributos del producto
  }));

  // Retornamos únicamente los primeros 4 productos
  return products.slice(0, 4);
};

export default getAllProducts;