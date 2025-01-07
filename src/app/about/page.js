// Importa el componente principal de la sección "About"
import AboutMain from "@/components/layout/main/AboutMain";

// Importa el controlador de temas (presumiblemente para manejar el cambio de temas de la página)
import ThemeController from "@/components/shared/others/ThemeController";

// Importa un envoltorio para manejar el diseño de la página
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Metadatos de la página "About" (utilizados para SEO y metadata del navegador)
export const metadata = {
  title: "About | Bastun- Business Consulting Next Js Template", // Título de la página
  description: "About | Bastun- Business Consulting Next Js Template", // Descripción de la página
};

// Componente funcional para la página "About"
export default function About() {
  return (
    // PageWrapper configura el diseño general de la página con estilos específicos para el encabezado y pie de página
    <PageWrapper
      headerStyle={3} // Estilo del encabezado (3 podría referirse a un diseño específico en tu configuración)
      footerStyle={3} // Estilo del pie de página
      headerBg={"black"} // Color de fondo del encabezado
      footerBg={"black"} // Color de fondo del pie de página
    >
      {/* Controlador de temas para la página (cambio de tema o colores, etc.) */}
      <ThemeController />

      {/* Componente principal que renderiza el contenido de la sección "About" */}
      <AboutMain />
    </PageWrapper>
  );
}