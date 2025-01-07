// Importa los componentes necesarios para construir la página de blogs
import BlogsMain from "@/components/layout/main/BlogsMain"; // Componente principal para mostrar los blogs
import ThemeController from "@/components/shared/others/ThemeController"; // Controlador del tema para gestionar estilos
import PageWrapper from "@/components/shared/wrappers/PageWrapper"; // Envoltorio para aplicar estilos y configuraciones globales

// Metadata para la página, utilizada por Next.js para SEO y configuración
export const metadata = {
  title: "Blogs | Bastun- Business Consulting Next Js Template", // Título de la página
  description: "Blogs | Bastun- Business Consulting Next Js Template", // Descripción de la página
};

// Componente principal para la página de blogs
export default function Blogs() {
  return (
    <PageWrapper
      headerStyle={3} // Estilo del encabezado
      footerStyle={3} // Estilo del pie de página
      headerBg={"black"} // Color de fondo del encabezado
      footerBg={"black"} // Color de fondo del pie de página
    >
      <ThemeController /> {/* Controlador del tema que puede manejar cambios globales de estilo */}
      <BlogsMain /> {/* Componente principal que contiene el contenido de los blogs */}
    </PageWrapper>
  );
}