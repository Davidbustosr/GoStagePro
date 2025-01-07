// Importación de los componentes necesarios para la página de checkout
import CheckoutMain from "@/components/layout/main/CheckoutMain"; // Componente principal que contiene el flujo de checkout
import ThemeController from "@/components/shared/others/ThemeController"; // Controlador para gestionar temas
import PageWrapper from "@/components/shared/wrappers/PageWrapper"; // Contenedor principal para estructurar la página

// Metadatos para la página de checkout
export const metadata = {
  title: "Checkout | Bastun- Business Consulting Next Js Template", // Título de la página, utilizado para SEO y en la pestaña del navegador
  description: "Checkout | Bastun- Business Consulting Next Js Template", // Descripción de la página, útil para SEO
};

// Componente principal para la página de checkout
export default function Checkout() {
  return (
    // Estructura de la página usando el componente PageWrapper
    <PageWrapper
      headerStyle={3} // Define el estilo del encabezado
      footerStyle={3} // Define el estilo del pie de página
      headerBg={"black"} // Establece el fondo negro para el encabezado
      footerBg={"black"} // Establece el fondo negro para el pie de página
    >
      <ThemeController /> {/* Componente que permite controlar el tema visual */}
      <CheckoutMain /> {/* Componente principal que maneja la funcionalidad del flujo de pago */}
    </PageWrapper>
  );
}