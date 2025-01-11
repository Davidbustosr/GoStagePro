// Importa el botón primario reutilizable y React
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import React from "react";

// Componente funcional para mostrar un formulario de registro en el footer
const NewsLetter = ({ style }) => {
  return (
    <div
      // Clases dinámicas basadas en la propiedad "style" para adaptarse al diseño
      className={`${
        !style
          ? "col-xl-4 col-lg-6 col-md-6 col-sm-12" // Diseño por defecto
          : "col-xl-3 col-lg-3 col-md-6 col-sm-6" // Diseño alternativo
      }`}
      data-aos="fade-up" // Agrega una animación al aparecer
      data-aos-duration="3000" // Define la duración de la animación en milisegundos
    >
      {/* Contenedor principal del widget del newsletter */}
      <div
        className={`footer__widget footer__right ${
          !style ? "" : "footer__right--2" // Aplica estilos adicionales si se pasa "style"
        }`}
      >
        {/* Título del formulario */}
        <div className="footer__menu__title">
          <h6>REGÍSTRATE PARA RECIBIR TODAS LAS NOTICIAS :</h6>
        </div>

        {/* Campo de entrada para el email */}
        <div className="footer__input">
          <input type="text" placeholder="INGRESAR EMAIL:" />
        </div>

        {/* Botón para enviar el formulario */}
        <div className="footer__bottom">
          <ButtonPrimary text={"REGISTRARME AHORA"} type="submit" />
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para ser utilizado en otras partes del proyecto
export default NewsLetter;