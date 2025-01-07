// Importa el componente principal que muestra los detalles del producto
import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";

// Importa el controlador de temas para manejar la apariencia de la página
import ThemeController from "@/components/shared/others/ThemeController";

// Importa el contenedor que envuelve la página con estilos de encabezado y pie de página
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Importa la función para obtener todos los productos
import getAllProducts from "@/libs/getAllProducts";

// Importa la función para manejar páginas no encontradas en Next.js
import { notFound } from "next/navigation";

// Metadatos para la página de detalles del producto
export const metadata = {
  title: "Product Details | Bastun- Business Consulting Next Js Template", // Título de la página para SEO y navegador
  description: "Product Details | Bastun- Business Consulting Next Js Template", // Descripción para SEO
};

// Obtiene la lista de todos los productos
const products = getAllProducts();

// Componente principal que renderiza los detalles de un producto específico
export default function ProductDetails({ params }) {
  const { id } = params; // Obtiene el parámetro `id` de la URL

  // Verifica si el producto existe en la lista
  const isExistProducts = products?.find(({ id: id1 }) => id1 === parseInt(id));

  // Si el producto no existe, renderiza la página de "No encontrado"
  if (!isExistProducts) {
    notFound();
  }

  // Renderiza el componente de detalles del producto
  return (
    <PageWrapper
      headerStyle={3} // Estilo del encabezado definido en el componente PageWrapper
      footerStyle={3} // Estilo del pie de página definido en el componente PageWrapper
      headerBg={"black"} // Color de fondo del encabezado
      footerBg={"black"} // Color de fondo del pie de página
    >
      {/* Controlador de temas para manejar la apariencia de la página */}
      <ThemeController />

      {/* Componente principal que muestra los detalles del producto */}
      <ProductDetailsMain />
    </PageWrapper>
  );
}

// Genera los parámetros estáticos para las rutas dinámicas de productos
export async function generateStaticParams() {
  // Mapea todos los productos y crea una lista de parámetros con sus IDs como cadenas
  return products?.map(({ id }) => ({ id: id.toString() }));
}