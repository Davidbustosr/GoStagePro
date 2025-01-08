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
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importa los estilos globales específicos del proyecto
import "./globals.css";

// Configura la fuente "Inter" con sus diferentes pesos y características
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontInter",
});

// Metadatos de la aplicación (usados para SEO y etiquetas de la página)
export const metadata = {
  title: "Home 1 | ",
  description: "Home 1 | ",
};

// 1) Importa ClientProviders
import ClientProviders from "./ClientProviders";

// Define el diseño raíz para toda la aplicación
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* 2) Envuelve {children} con ClientProviders */}
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}