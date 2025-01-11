// Importa imágenes y componentes relacionados con el footer
import footerImage1 from "@/assets/img/footer/footer_1.png";
import footerImage2 from "@/assets/img/footer/footer__bg__1.png";
import footerImage3 from "@/assets/img/footer/footer__bg__2.png";
import FooterBadge from "./FooterBadge";
import LogoFooter from "./LogoFooter";
import SupportFooter from "./SupportFooter";
import LinksFooter from "./LinksFooter";
import NewsLetter from "./NewsLetter";
import Copyright from "./Copyright";
import GalleryFooter from "./GalleryFooter";
import Copyright2 from "./Copyright2";
import ConsultingFooter from "./ConsultingFooter";
import Brands4 from "@/components/sections/brands/Brands4";

// Componente funcional que representa el footer del sitio web
const Footer = ({ style, footerBg, copyright }) => {
  return (
    <>
      {/* Contenedor principal del footer */}
      <div
        className={`${
          !style
            ? "footer pink__bg__color  sp_top_250" // Estilo por defecto del footer
            : `footer__${style} ${
                style === 3 && footerBg === "black"
                  ? "sp_top_200" // Margen superior para estilo 3 con fondo negro
                  : " sp_top_140" // Margen superior estándar
              } `
        } ${style === 4 ? "sp_bottom_140" : ""}  position-relative ${
          footerBg === "black" ? "bg__black" : "" // Fondo negro si `footerBg` es "black"
        }`}
        id={!style ? `footer__area` : `footer__area__${style} `} // ID dinámico basado en el estilo
        style={
          !style || style === 2 || style === 4
            ? {
                backgroundImage: `url('${
                  !style
                    ? footerImage1.src // Imagen de fondo para el estilo por defecto
                    : style === 2
                    ? footerImage2.src // Imagen de fondo para el estilo 2
                    : footerImage3.src // Imagen de fondo para el estilo 4
                }')`,
              }
            : {}
        }
      >
        <div className="container">
          {/* Renderiza un footer específico para estilo 4 */}
          {style === 4 ? (
            <div className="row">
              <ConsultingFooter />
            </div>
          ) : (
            // Renderiza el footer estándar para otros estilos
            <div className="footer__wrapper sp_bottom_110">
              <div className="row">
                <LogoFooter style={style} /> {/* Logotipo del footer */}
                {!style ? <SupportFooter /> : ""} {/* Soporte si no hay estilo */}
                <LinksFooter style={style} /> {/* Enlaces en el footer */}
                <NewsLetter style={style} /> {/* Sección de newsletter */}
              </div>
            </div>
          )}

          {/* Renderiza el componente Copyright solo si no hay un estilo definido */}
          {!style ? <Copyright /> : ""}
        </div>
      </div>

      {/* Renderiza el componente Copyright2 para estilos específicos */}
      {copyright === 2 || style === 2 || style === 3 || style === 4 ? (
        <Copyright2 style={style} copyright={copyright} />
      ) : (
        "" // No renderiza nada si no se cumple la condición
      )}
    </>
  );
};

// Exporta el componente Footer para su uso en otras partes de la aplicación
export default Footer;