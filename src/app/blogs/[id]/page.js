// Importa los componentes necesarios para la página de detalles del blog
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Importa una función para obtener todos los blogs y un manejador para páginas no encontradas
import getAllBlogs from "@/libs/getAllBlogs";
import { notFound } from "next/navigation";

// Metadata para la página, utilizada por Next.js para SEO y configuración
export const metadata = {
  title: "Blogs Details | Bastun- Business Consulting Next Js Template", // Título de la página
  description: "Blogs Details | Bastun- Business Consulting Next Js Template", // Descripción de la página
};

// Obtiene todos los blogs disponibles
const blogs = getAllBlogs();

// Componente principal para mostrar los detalles de un blog
export default function BlogsDetails({ params }) {
  const { id } = params; // Extrae el parámetro de ID del blog desde los parámetros de la ruta

  // Verifica si el blog existe buscando el ID en la lista de blogs
  const isExistBlog = blogs?.find(({ id: id1 }) => id1 === parseInt(id));

  // Si no se encuentra el blog, redirige a una página de "No encontrado"
  if (!isExistBlog) {
    notFound();
  }

  // Renderiza la página de detalles del blog
  return (
    <PageWrapper
      headerStyle={3} // Estilo del encabezado
      footerStyle={3} // Estilo del pie de página
      headerBg={"black"} // Fondo del encabezado
      footerBg={"black"} // Fondo del pie de página
    >
      <ThemeController /> {/* Controlador del tema para gestionar estilos */}
      <BlogDetailsMain /> {/* Componente principal para mostrar los detalles del blog */}
    </PageWrapper>
  );
}

// Función para generar rutas estáticas para todos los blogs (utilizada en SSG - Static Site Generation)
export async function generateStaticParams() {
  return blogs?.map(({ id }) => ({ id: id.toString() })); // Retorna los parámetros de las rutas como un array de objetos con los IDs de los blogs
}