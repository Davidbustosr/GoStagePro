// Importación del componente principal de la sección de FAQ (preguntas frecuentes)
import FaqMain from "@/components/layout/main/FaqMain";

// Importación de un controlador de temas para manejar la apariencia de la aplicación
import ThemeController from "@/components/shared/others/ThemeController";

// Importación de un contenedor que envuelve el contenido principal con estilos de encabezado y pie de página
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Metadatos para la página FAQ, utilizados por Next.js para SEO y etiquetas de la página
export const metadata = {
  title: "FAQ | Bastun- Business Consulting Next Js Template", // Título que aparece en el navegador
  description: "Faq | Bastun- Business Consulting Next Js Template", // Descripción de la página para SEO
};

// Componente principal que renderiza la página de preguntas frecuentes (FAQ)
export default function Faq() {
  return (
    <PageWrapper
      headerStyle={3} // Estilo del encabezado, controlado por el componente PageWrapper
      footerStyle={3} // Estilo del pie de página, controlado por el componente PageWrapper
      headerBg={"black"} // Color de fondo del encabezado
      footerBg={"black"} // Color de fondo del pie de página
    >
      {/* Controlador de temas que permite manejar dinámicamente la apariencia */}
      <ThemeController />

      {/* Componente principal que muestra las preguntas frecuentes */}
      <FaqMain />
    </PageWrapper>
  );
}