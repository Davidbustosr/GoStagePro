// Importa el componente Social y React
import Social from "@/components/shared/socials/Social";
import React from "react";

// Componente funcional que representa una sección de derechos de autor con diferentes estilos y configuraciones
const Copyright2 = ({ style, copyright }) => {
  return (
    <div
      className={`copyright copyright--${
        style === 3 && !copyright
          ? style + 1 // Incrementa el estilo si es 3 y no tiene el prop `copyright`
          : copyright === 2
          ? 2 // Si el prop `copyright` es 2, aplica ese estilo
          : style // Aplica el estilo por defecto
      } `}
    >
      <div className="container"> {/* Contenedor principal */}
        <div className="row align-items-center"> {/* Fila con alineación central */}
          {/* Sección izquierda */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div
              className={`copyright__left ${
                style === 4 ? "" : "copyright__left--2 "
              }`}
            >
              <p>
                Copyright © 2024{" "}
                {style === 3 && !copyright ? ( 
                  // Si el estilo es 3 y no hay `copyright`, muestra solo el texto
                  "GO STAGE PRO."
                ) : (
                  // En cualquier otro caso, muestra el enlace
                  <a href="/">GO STAGE PRO.</a>
                )}{" "}
                All Right Reserved
              </p>
            </div>
          </div>
          {/* Sección derecha */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {style === 4 ? (
              // Si el estilo es 4, muestra los íconos sociales
              <Social type="copyright" />
            ) : (
              // En otros estilos, muestra enlaces de políticas
              <div className="copyright__right">
                <ul>
                  <li>
                    <a href="#">Política de privacidad</a> {/* Enlace a la política de privacidad */}
                  </li>{" "}
                  <li>
                    <a href="#">||</a> {/* Separador */}
                  </li>{" "}
                  <li>
                    <a href="#">Términos y condiciones</a> {/* Enlace a términos y condiciones */}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Flecha de desplazamiento hacia arriba */}
      {style === 4 ? (
        <div className="copyright__arrow">
          <a href="#">
            <i className="icofont-arrow-up"></i> {/* Ícono de flecha */}
          </a>
        </div>
      ) : (
        "" // No mostrar nada si el estilo no es 4
      )}
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros lugares
export default Copyright2;