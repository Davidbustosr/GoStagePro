// Importa el componente Link de Next.js para manejar enlaces internos
import Link from "next/link";

// Componente funcional que representa la sección de derechos de autor
const Copyright = () => {
  return (
    <div className="copyright"> {/* Contenedor principal del copyright */}
      <div className="row align-items-center"> {/* Fila con alineación central para los elementos */}
        {/* Sección izquierda del copyright */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__left"> {/* Contenedor del texto de derechos de autor */}
            <p>
              Copyright © 2024 <Link href="/">GO STAGE PRO.</Link> {/* Enlace al inicio */}
              Todos los derechos reservados.
            </p>
          </div>
        </div>
        {/* Sección derecha con enlaces de políticas */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__right"> {/* Contenedor para los enlaces */}
            <ul>
              <li>
                <Link href="#">Política de privacidad ||</Link> {/* Enlace a la política de privacidad */}
              </li>{" "}
              <li>
                <Link href="#">Términos y condiciones</Link> {/* Enlace a los términos y condiciones */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Copyright;