"use client";
import Image from "next/image";
import contactImage2 from "@/assets/img/contact/contact__2.png";
import useSearch from "@/hooks/useSearch";
import CommonContext from "@/providers/CommonContext";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";

const FaqPrimary = () => {
  const allBlogs = getAllBlogs();
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
  } = useSearch(allBlogs, "/blogs");
  
  // Preguntas y respuestas
  const items = [
    {
      question: "¿Qué es una plantilla de sonido y cómo funciona?",
      answer: "Una plantilla de sonido es una combinación preconfigurada de instrumentos y efectos diseñada para facilitar la creación de música. Estas plantillas permiten a los músicos seleccionar sonidos específicos rápidamente y adaptarlos a su estilo musical."
    },
    {
      question: "¿Las plantillas son compatibles en MacOs & Windows?",
      answer: "Nuestras plantillas funcionan perfectamente en dispositivos que tengan Mainstage(MacOs), ya que este software está optimizado para estas configuraciones. Sin embargo, MainStage no está disponible para computadoras con Windows, lo que limitara la compatibilidad."
    },
    {
      question: "¿Puedo personalizar las plantillas según mis necesidades?",
      answer: "Por supuesto. Todas nuestras plantillas pueden personalizarse agregando o eliminando instrumentos, ajustando niveles de volumen, y aplicando efectos adicionales para adaptarlas a tu estilo."
    },
    {
      question: "¿Qué incluye cada plantilla en los diferentes planes (Inicial, Básico, Intermedio y Pro)?",
      answer: "Cada plantilla incluye combinaciones específicas de instrumentos y efectos: \n- Plan Inicial: Sonidos básicos para principiantes.\n- Plan Básico: Una selección más amplia de instrumentos esenciales.\n- Plan Intermedio: Combinaciones avanzadas con efectos personalizables.\n- Plan Pro: Configuraciones completas con la máxima flexibilidad."
    },
    {
      question: "¿Puedo descargar las plantillas para usarlas sin conexión?",
      answer: "Sí, puedes descargar las plantillas para usarlas en cualquier momento, incluso sin conexión a internet. Solo asegúrate de tenerlas descargadas en tu computadora."
    },
    {
      question: "¿Qué tipo de sonidos están incluidos en las plantillas?",
      answer: "Las plantillas incluyen una variedad de sonidos como pianos, pads, sintetizadores, cuerdas, vientos, y más."
    },
    {
      question: "¿Ofrecen soporte técnico en caso de problemas?",
      answer: "Sí, contamos con soporte técnico 24/7 para ayudarte con cualquier problema relacionado con la descarga, configuración o uso de las plantillas."
    },
    {
      question: "¿Puedo escuchar una demo de las plantillas antes de comprarlas?",
      answer: "Claro. Ofrecemos audios de muestra para cada plantilla, para que puedas escuchar cómo suenan y elegir la que mejor se adapte a tus necesidades. presiona en el boton EXPLORAR SONIDOS."
    },
  ];
  
  return (
    <div className="faq__area sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
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
              <BlogSidebar sidebar="faq" />
            </CommonContext>
          </div>
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="faq__accordion">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {items?.map((item, idx) => (
                  <div key={idx} className="accordion-item">
                    <h2
                      className="accordion-header"
                      id={`panelsStayOpen-heading${idx + 1}`}
                    >
                      <button
                        className={`accordion-button ${
                          idx === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${idx + 1}`}
                        aria-expanded={idx === 0 ? true : false}
                        aria-controls={`panelsStayOpen-collapse${idx + 1}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse${idx + 1}`}
                      className={`accordion-collapse collapse ${
                        idx === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`panelsStayOpen-heading${idx + 1}`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPrimary;