import megaMenuImage1 from "@/assets/img/mega/mega_menu_1.png"; // Importa una imagen utilizada en el menú
import DropdownHome from "./DropdownHome"; // Componente para el dropdown del menú "Home"
import DropdownPages from "./DropdownPages"; // Componente para el dropdown de "Pages"
import DropdownEcommerce from "./DropdownEcommerce"; // Componente para el dropdown de "Ecommerce"
import NavItem from "./NavItem"; // Componente para representar cada elemento del menú
import { useHeaderContex } from "@/providers/HeaderContex"; // Hook para obtener contexto del encabezado

// Componente principal del menú de navegación
const Navbar = () => {
  // Obtiene configuraciones y datos desde el contexto del encabezado
  const { isOnepage, style, headerType, footerStyle, isCollection, home } = useHeaderContex();

  // Define los elementos crudos del menú con propiedades dinámicas basadas en el contexto
  const navItemsRaw = [
    {
      name: "INICIO", // Título del elemento del menú
      icon: isOnepage ? false : true, // Si no es "onepage", muestra un ícono
      path: "/", // Ruta para redirigir a la página de inicio
      dropdown: null, // Sin dropdown para este elemento
    },
    {
      name:
        isOnepage && home === 19
          ? "STRATEGY" // Nombre dinámico dependiendo de las condiciones
          : isOnepage && (home === 12 || home === 18)
          ? "PORTFOLIO"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "SERVICE"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "COLLECTION"
          : isOnepage && (style === 2 || style === 3)
          ? "ABOUT"
          : "IR A", // Valor por defecto
      icon: isOnepage ? false : true, // Ícono dependiendo del contexto
      path:
        isOnepage && home === 19
          ? "#tb__strategy"
          : isOnepage && (home === 12 || home === 18)
          ? "#tb__portfolio"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "#service__area"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "#popular__products"
          : isOnepage && (style === 2 || style === 3)
          ? home === 13
            ? "#tb_about"
            : "#about__mission__area"
          : "#", // Ruta dinámica dependiendo del contexto
      dropdown: null, // Sin dropdown por defecto
      position: "static", // Posición estática del dropdown
      dropdownThumbs: {
        img: megaMenuImage1, // Imagen para el dropdown
        path: "#", // Ruta de enlace
      },
      dropdownContens: [
        {
          title: "COMIENZA AQUI", // Título del dropdown
          dropdownItems: [
            {
              name: "Explorar Planes", // Nombre del enlace
              path: "/blogs/1", // Ruta del enlace
              label: null, // Etiqueta adicional, en este caso vacía
            },
            {
              name: "Explorar Sonidos",
              path: "/blogs",
              label: null,
            },
            {
              name: "Contacto",
              path: "/contact",
              label: null,
            },
            {
              name: "Preguntas Frecuentes",
              path: "/faq",
              label: null,
            },
          ],
        },
        {
          title: "AYUDA",
          dropdownItems: [
            {
              name: "¿Como crear una plantilla?",
              path: "/services",
              label: "Guia", // Etiqueta indicando que es una guía
            },
          ],
        },
      ],
    },
    {
      name:
        isOnepage && (home == 14 || home === 19)
          ? "ABOUT"
          : isOnepage && home == 13
          ? "PROJECTS"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "SERVICE"
          : style === 3 && headerType === 3
          ? "PROJECTS"
          : "SOBRE NOSOTROS", // Título dinámico basado en el contexto
      icon: false, // Este elemento no muestra un ícono
      path:
        isOnepage && (home == 14 || home === 19)
          ? "#about__mission__area"
          : isOnepage && home == 13
          ? "#project__area"
          : isOnepage && !style
          ? "#about__mission__area"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "#service__area"
          : style === 3 && headerType === 3
          ? "#project__area"
          : "/about", // Ruta definida de forma dinámica
      dropdown: null, // Sin dropdown
    },
    {
      name:
        isOnepage && home === 19
          ? "PORTFOLIO"
          : isOnepage && home == 13
          ? "PRICING"
          : isOnepage && (home === 12 || home === 18)
          ? "SERVICE"
          : isOnepage && headerType !== 3
          ? "PROJECTS"
          : style === 3 && headerType === 3
          ? "ABOUT"
          : "TIENDA", // Otra opción dinámica
      icon: isOnepage ? false : true, // Icono basado en el contexto
      path:
        isOnepage && home === 19
          ? "#tb__portfolio"
          : isOnepage && home == 13
          ? "#tb__pricing"
          : isOnepage && (home === 12 || home === 18)
          ? "#service__area"
          : isOnepage && headerType !== 3
          ? "#project__area"
          : style === 3 && headerType === 3
          ? "#about__mission__area"
          : "/home-9", // Ruta dinámica
      dropdown: null, // Sin dropdown
      dropdownItems: [
        {
          name: "Productos",
          path: "/shop",
          label: "",
          icon: true,
        },
        {
          name: "Tu Carro",
          path: "/cart",
          label: null,
        },
        {
          name: "Checkout",
          path: "/checkout",
          label: null,
        },
      ],
    },
    {
      name:
        isOnepage && (home === 12 || home === 19)
          ? "CONTACT"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "BLOGS"
          : isOnepage && style === 3
          ? "CONTACT"
          : "EXPLORAR SONIDOS", // Opción dinámica
      icon: false, // Sin ícono
      path:
        isOnepage && (home === 12 || home === 19)
          ? "#tb__contact"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "#blog__area"
          : isOnepage && style === 3
          ? "#tb__contact"
          : "/blogs", // Ruta dinámica
      dropdown: null, // Sin dropdown
    },
    {
      name:
        isOnepage && home === 13
          ? "CONTACT"
          : isOnepage && (home === 12 || home === 19)
          ? "BLOGS"
          : isOnepage && style === 3 && (!headerType || headerType === 3)
          ? "BLOGS"
          : "CONTACTO", // Opción dinámica
      icon: false, // Sin ícono
      path:
        isOnepage && home === 13
          ? "#tb__contact"
          : isOnepage && (home === 12 || home === 19)
          ? "#blog__area"
          : isOnepage &&
            (!style || style === 2 || (style === 3 && headerType === 2))
          ? "#tb__contact"
          : isOnepage && style === 3
          ? "#blog__area"
          : "/contact", // Ruta dinámica
      dropdown: null, // Sin dropdown
    },
  ];

  // Procesa los elementos del menú para agregar componentes dropdown dinámicamente
const navItems = navItemsRaw?.map((navItem, idx) =>
  idx === 0
    ? {
        ...navItem, // Copia del elemento original
        dropdown: null, // Asegura que "INICIO" nunca tenga un dropdown
      }
    : idx === 1
    ? {
        ...navItem,
        dropdown: isOnepage ? null : (
          <DropdownPages
            dropdownContents={navItem.dropdownContens}
            dropdownThumbs={navItem.dropdownThumbs}
          />
        ),
      }
    : idx === 3
    ? {
        ...navItem,
        dropdown: isOnepage ? null : (
          <DropdownEcommerce dropdownItems={navItem.dropdownItems} />
        ),
      }
    : navItem // Resto de los elementos sin cambios
);

  // Renderiza el menú de navegación en HTML
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))} {/* Renderiza cada elemento del menú */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; // Exporta el componente para ser usado en otras partes de la app