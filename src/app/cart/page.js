// Importación de los componentes necesarios para la página del carrito
import CartMain from "@/components/layout/main/CartMain"; // Componente principal para mostrar el contenido del carrito
import ThemeController from "@/components/shared/others/ThemeController"; // Controlador para gestionar temas
import PageWrapper from "@/components/shared/wrappers/PageWrapper"; // Contenedor principal para la estructura de la página

// Metadatos para la página del carrito
export const metadata = {
  title: "Cart | Bastun- Business Consulting Next Js Template", // Título de la página, usado para SEO y el título en la pestaña del navegador
  description: "Cart | Bastun- Business Consulting Next Js Template", // Descripción de la página, también usada para SEO
};

// Componente principal para la página del carrito
export default function Cart() {
  return (
    // Estructura de la página utilizando PageWrapper
    <PageWrapper
      headerStyle={3} // Estilo del encabezado
      footerStyle={3} // Estilo del pie de página
      headerBg={"black"} // Fondo negro para el encabezado
      footerBg={"black"} // Fondo negro para el pie de página
    >
      <ThemeController /> {/* Componente para manejar temas, permite ajustar el esquema de colores */}
      <CartMain /> {/* Componente principal que contiene el contenido del carrito */}
    </PageWrapper>
  );
}