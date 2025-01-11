// Importación de los componentes necesarios para la página de contacto
import ContactMain from "@/components/layout/main/ContactMain"; // Componente principal que gestiona el formulario y contenido de contacto
import ThemeController from "@/components/shared/others/ThemeController"; // Componente que gestiona el esquema de temas y colores
import PageWrapper from "@/components/shared/wrappers/PageWrapper"; // Componente contenedor que organiza la estructura de la página

// Metadatos de la página de contacto
export const metadata = {
  title: "Contact | Bastun- Business Consulting Next Js Template", // Título de la página para SEO y la pestaña del navegador
  description: "Contact | Bastun- Business Consulting Next Js Template", // Descripción de la página para los motores de búsqueda
};

// Componente principal para la página de contacto
export default function Contact() {
  return (
    // Estructura de la página utilizando PageWrapper
    <PageWrapper
      headerStyle={3} // Define el estilo del encabezado
      footerStyle={3} // Define el estilo del pie de página
      headerBg={"black"} // Establece el color negro como fondo del encabezado
      footerBg={"black"} // Establece el color negro como fondo del pie de página
    >
      <ThemeController /> {/* Componente que gestiona el tema visual */}
      <ContactMain /> {/* Componente principal que contiene el formulario y la información de contacto */}
    </PageWrapper>
  );
}