// Importa componentes necesarios para imágenes y enlaces
import Image from "next/image";
import Link from "next/link";

// Importa las imágenes del logo desde la carpeta de activos
import logoImag1 from "@/assets/img/logo/Logo_1.png";
import logoImag2 from "@/assets/img/logo/Logo_2.png";

// Componente funcional para renderizar el logo y texto en el footer
const LogoFooter = ({ style }) => {
  return (
    <div
      // Define clases dinámicas según el estilo pasado como propiedad
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up" // Animación de desplazamiento hacia arriba
      data-aos-duration="1500" // Duración de la animación en milisegundos
    >
      {/* Contenedor principal del widget del footer */}
      <div className="footer__widget footer__left position-relative">
        {/* Sección del logo */}
        <div className="footer__logo">
          {style === 2 ? (
            <>
              {/* Muestra ambos logos si el estilo es igual a 2 */}
              <Image src={logoImag1} alt="Logo 1" className="logo-image1" />
              <Image src={logoImag2} alt="Logo 2" className="logo-image2" />
            </>
          ) : (
            // Muestra solo un logo si el estilo no es igual a 2
            <Image src={logoImag1} alt="Logo principal" className="logo-image small-logo" />
          )}
        </div>

        {/* Texto descriptivo debajo del logo */}
        <div className="footer__text">
          <p>
            GO STAGE PRO es la solución perfecta para músicos y líderes de adoración. Diseñamos
            plantillas accesibles y profesionales que transforman tu experiencia musical en el escenario.
          </p>
        </div>

        {/* Sección de iconos sociales */}
        <div className="footer__icon">
          <ul>
            {/* Cada ítem es un enlace a redes sociales */}
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para ser utilizado en otras partes del proyecto
export default LogoFooter;