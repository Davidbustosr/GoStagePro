"use client"; // Indica que este componente se ejecuta del lado del cliente en Next.js.
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar"; // Barra lateral con opciones de navegación.
import useSearch from "@/hooks/useSearch"; // Hook personalizado para manejar búsquedas.
import getAllBlogs from "@/libs/getAllBlogs"; // Obtiene todos los blogs disponibles.
import CommonContext from "@/providers/CommonContext"; // Proveedor de contexto global.
import { useParams } from "next/navigation"; // Hook para acceder a parámetros dinámicos de la URL.
import React from "react"; // Importa React.

const BlogDetailsPrimary = () => {
  const { id: currentId } = useParams(); // Obtiene el parámetro dinámico `id` de la URL.

  const blogs = getAllBlogs(); // Recupera todos los blogs.
  const blog = blogs.find(({ id }) => id === parseInt(currentId)); // Busca el blog correspondiente al `id`.
  const { title, desc, category } = blog; // Extrae las propiedades necesarias del blog.

  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(blogs, "/blogs");

  // Videos específicos para cada plan
  const videoUrls = {
    1: "https://www.youtube.com/embed/GfsAV2oSkjU", // Plan Inicial
    2: "https://www.youtube.com/embed/cX6yJoJV2_w", // Plan Básico
    3: "https://www.youtube.com/embed/CluuHrr7HG4", // Plan Intermedio
    4: "https://www.youtube.com/embed/82l1abESLuw", // Plan Pro
  };

  // Contenido dinámico basado en el `id` del blog (planes).
  const planDetails = {
    1: {
      title: "Plan Inicial",
      description:
        "El Plan Inicial es perfecto para comenzar. Incluye herramientas básicas para explorar el mundo del diseño musical.",
      features: [
        "Acceso limitado a sonidos básicos.",
        "Soporte técnico estándar.",
        "Ideal para principiantes que quieren experimentar.",
      ],
    },
    2: {
      title: "Plan Básico",
      description:
        "El Plan Básico ofrece funcionalidades esenciales para personalizar tus creaciones musicales.",
      features: [
        "Acceso a configuraciones esenciales.",
        "Soporte técnico priorizado.",
        "Opciones limitadas de personalización.",
      ],
    },
    3: {
      title: "Plan Intermedio",
      description:
        "El Plan Intermedio incluye opciones avanzadas para quienes buscan más herramientas y flexibilidad.",
      features: [
        "Acceso a sonidos adicionales.",
        "Plantillas personalizables.",
        "Soporte técnico avanzado.",
      ],
    },
    4: {
      title: "Plan Pro",
      description:
        "El Plan Pro es ideal para profesionales, con acceso completo a todas las herramientas y funcionalidades.",
      features: [
        "Acceso ilimitado a todos los recursos.",
        "Funciones avanzadas de diseño y personalización.",
        "Soporte técnico premium.",
      ],
    },
  };

  const currentPlan = planDetails[currentId] || {}; // Obtiene los detalles del plan según el `id`.

  return (
    <div className="blog__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row">
          {/* Barra lateral */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar />
            </CommonContext>
          </div>

          {/* Contenido principal */}
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="blog__details__wrapper">
              {/* Video específico del plan */}
              <div
                className="blog__details__video__wrapper"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="blog__details__video">
                  <iframe
                    width="100%"
                    height="400px"
                    src={videoUrls[currentId] || "https://www.youtube.com/embed/default"}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Título del blog */}
              <div
                className="blog__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{currentPlan.title || title}</h4>
              </div>

              {/* Descripción del blog */}
              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{currentPlan.description || desc}</p>
              </div>

              {/* Lista de características si aplica */}
              {currentPlan.features && (
                <div
                  className="blog__details__list"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <ul>
                    {currentPlan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Texto adicional */}
              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Explora las posibilidades y lleva tus proyectos al siguiente
                  nivel con las herramientas adecuadas para tus necesidades.
                </p>
              </div>

              {/* Compartir en redes sociales */}
              <div
                className="blog__details__social__icon"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <div className="blog__details__share">
                    <span>Share Post:</span>
                  </div>
                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.facebook.com/"
                    >
                      <span>
                        <i className="icofont-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="common__gradient__bg" href="https://x.com/">
                      <span>
                        <i className="icofont-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.skype.com/"
                    >
                      <span>
                        <i className="icofont-skype"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="common__gradient__bg"
                      href="https://www.linkedin.com/"
                    >
                      <span>
                        <i className="icofont-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;