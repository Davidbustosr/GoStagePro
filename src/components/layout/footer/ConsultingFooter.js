// Importa el componente de botón primario y React
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import React from "react";

// Componente funcional que representa el pie de página para la sección de consultoría
const ConsultingFooter = () => {
  return (
    <div
      className="col-xl-12" // Establece el ancho del contenedor como 12 columnas en Bootstrap
      data-aos="fade-up" // Agrega animación de aparición desde abajo (usando AOS - Animate On Scroll)
      data-aos-duration="1500" // Configura la duración de la animación en milisegundos
    >
      <div className="footer__4__wrapper"> {/* Contenedor principal del pie de página */}
        <div className="footer__4__small__text">
          <span></span> {/* Elemento decorativo opcional, actualmente vacío */}
        </div>
        <div className="footer__4__heading">
          <h1>
            {/* Encabezado del pie de página, actualmente vacío. Puedes agregar texto si es necesario */}
          </h1>
        </div>
        <div className="footer__4__button">
          {/* Botón principal con texto "START NOW" que redirige a la página de servicios */}
          <ButtonPrimary text="START NOW" path="/services" />
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para ser usado en otras partes de la aplicación
export default ConsultingFooter;