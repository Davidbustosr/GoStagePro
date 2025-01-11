// Importa el componente Link de Next.js para crear enlaces internos
import Link from "next/link";

// Componente funcional que genera una lista de enlaces en el footer
const LinksFooter = ({ style }) => {
  // Define los elementos de la lista de enlaces, cada uno con un nombre y una ruta
  const items = [
    {
      name: "Explorar Sonidos", // Nombre del enlace
      path: "/about2", // Ruta del enlace
    },
    {
      name: "Planes & Precios",
      path: "/shop",
    },
    {
      name: "Preguntas Frecuentes",
      path: "/faq",
    },
    {
      name: "Contacto",
      path: "/contact",
    },
  ];

  return (
    <div
      // Clase dinámica que varía según el estilo pasado como propiedad
      className={`col-xl-2 ${
        !style ? "col-lg-6" : "col-lg-2"
      } col-md-6 col-sm-6`}
      data-aos="fade-up" // Animación de desplazamiento hacia arriba
      data-aos-duration="2500" // Duración de la animación en milisegundos
    >
      {/* Contenedor principal del widget de enlaces rápidos */}
      <div className="footer__widget footer__quick">
        {/* Título de la sección de enlaces */}
        <div className="footer__menu__title">
          <h6>ENLACES :</h6>
        </div>

        {/* Contenedor de la lista de enlaces */}
        <div className="footer__menu">
          <ul>
            {/* Mapea cada elemento de la lista y genera un enlace dinámicamente */}
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                {/* Enlace a la ruta especificada */}
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default LinksFooter;