// Importa el componente Link de Next.js para manejar las rutas
import Link from "next/link";

// Componente funcional para mostrar un menú de soporte en el footer
const SupportFooter = () => {
  // Definición de los elementos del menú de soporte con sus respectivos nombres y rutas
  const items = [
    {
      name: "Home", // Nombre del enlace
      path: "/", // Ruta del enlace
    },
    {
      name: "About us",
      path: "/about",
    },
    {
      name: "Blog update",
      path: "/blogs",
    },
    {
      name: "Our services",
      path: "/services",
    },
    {
      name: "Testimonial",
      path: "#",
    },
  ];

  return (
    <div
      // Contenedor principal del widget del menú de soporte
      className="col-xl-2 col-lg-6 col-md-6 col-sm-6"
      data-aos="fade-up" // Agrega una animación al aparecer
      data-aos-duration="2000" // Duración de la animación en milisegundos
    >
      <div className="footer__widget footer__support">
        {/* Título del widget */}
        <div className="footer__menu__title">
          <h6>SUPPORT :</h6>
        </div>

        {/* Menú de soporte con enlaces */}
        <div className="footer__menu">
          <ul>
            {/* Itera sobre los elementos definidos y los renderiza como enlaces */}
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                {/* Enlace a la ruta correspondiente */}
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes del proyecto
export default SupportFooter;