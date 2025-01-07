// Importa la fuente "Inter" de Google Fonts
import { Inter } from "next/font/google";

// Importa los estilos de Bootstrap para diseño y componentes responsivos
import "@/assets/css/bootstrap.min.css";

// Importa estilos de animaciones de scroll (AOS)
import "aos/dist/aos.css";

// Importa íconos de la librería "Icofont"
import "@/assets/css/icofont.min.css";

// Importa estilos de la librería de lightbox para imágenes o galerías
import "@/assets/css/glightbox.min.css";

// Importa estilos básicos y específicos de Swiper para carruseles
import "swiper/css"; // Estilos principales de Swiper
import "swiper/css/navigation"; // Estilos para la navegación de Swiper
import "swiper/css/pagination"; // Estilos para la paginación de Swiper

// Importa los estilos globales específicos del proyecto
import "./globals.css";

// Opcional: Importa estilos responsivos adicionales (comentado en este caso)
// import "@/assets/css/responsive.css";

// Configura la fuente "Inter" con sus diferentes pesos y características
const inter = Inter({
  subsets: ["latin"], // Subconjuntos de caracteres compatibles
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Pesos de la fuente disponibles
  display: "swap", // Cambia al texto renderizado tan pronto como esté disponible
  variable: "--fontInter", // Define una variable CSS personalizada para la fuente
});

// Metadatos de la aplicación (usados para SEO y etiquetas de la página)
export const metadata = {
  title: "Home 1 | Bastun- Business Consulting Next Js Template", // Título de la página
  description: "Home 1 | Bastun- Business Consulting Next Js Template", // Descripción de la página
};

// Define el diseño raíz para toda la aplicación
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Etiqueta HTML con idioma configurado en inglés */}
      <body className={`${inter.className}`}>
        {/* El contenido de las páginas hijo se renderiza aquí */}
        {children}
      </body>
    </html>
  );
}