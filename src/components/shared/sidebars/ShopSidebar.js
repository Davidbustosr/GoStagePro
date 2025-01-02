import getAllProducts from "@/libs/getAllProducts"; // Función para obtener todos los productos.
import Link from "next/link"; // Componente de Next.js para navegación.
import CollpaseButton from "./widgets/CollpaseButton"; // Botón para colapsar el sidebar.

// Definición de los nuevos filtros para el sidebar.
const filterAccordions = [
  {
    controllerName: "Price Range", // Nombre del filtro.
    inputName: "priceRange", // Nombre del campo para identificarlo.
    checks: ["$0-$50", "$50-$100", "$100-$200"], // Opciones de rango de precios.
  },
  {
    controllerName: "Popularity",
    inputName: "popularity",
    checks: ["Best Sellers", "Most Popular"], // Opciones relacionadas con popularidad.
  },
  {
    controllerName: "Ratings",
    inputName: "ratings",
    checks: ["⭐ 5 Stars", "⭐ 4 Stars & Up", "⭐ 3 Stars & Up"], // Opciones relacionadas con valoraciones.
  },
  {
    controllerName: "Offers & Promotions",
    inputName: "offers",
    checks: ["Discounts", "Black Friday", "Cyber Monday"], // Opciones de ofertas.
  },
];

// Componente principal del sidebar.
const ShopSidebar = ({
  handleFilters, // Función para manejar los filtros seleccionados.
  priceRange = [], // Estado del filtro de rango de precios (inicializado como array vacío).
  popularity = [], // Estado del filtro de popularidad (inicializado como array vacío).
  ratings = [], // Estado del filtro de valoraciones (inicializado como array vacío).
  offers = [], // Estado del filtro de promociones (inicializado como array vacío).
  handleReset, // Función para resetear los filtros.
}) => {
  const allProducts = getAllProducts(); // Obtiene todos los productos.

  // Variable para controlar si los filtros se muestran o no. Cambiar a `true` para mostrarlos.
  const showFilters = true;

  return (
    <div className="col-xl-3 col-lg-4 col-md-12 column__custom__class">
      {/* Botón para colapsar el sidebar */}
      <CollpaseButton />

      <div className="sidebar-collapse-hide">
        <div
          className="shopsidebar"
          data-aos="fade-up" // Animación al cargar el sidebar.
          data-aos-duration="1800" // Duración de la animación.
        >
          {/* Sección de filtros (oculta si `showFilters` es `false`) */}
          {showFilters && (
            <>
              {/* Sección superior del sidebar */}
              <div className="shopsidebar__top">
                <h2>Filtros:</h2> {/* Título del sidebar */}
                <div className="shopsidebar__remove">
                  {/* Botón para remover todos los filtros */}
                  <button onClick={handleReset}>Eliminar Filtros</button>
                </div>
              </div>

              {/* Mapeo de los nuevos filtros definidos en `filterAccordions` */}
              {filterAccordions?.map(
                ({ controllerName, checks, inputName }, idx) => (
                  <div key={idx} className="shopsidebar__widget">
                    {/* Widget de cada filtro */}
                    <details open>
                      <summary>{controllerName}</summary> {/* Título del filtro */}
                      <div className="shopsidebar__list">
                        <ul>
                          {checks?.map((check, idx1) => (
                            <li key={idx1}>
                              <div className="shopsidebar__box">
                                {/* Input para cada opción del filtro */}
                                <input
                                  checked={
                                    inputName === "priceRange"
                                      ? priceRange.includes(check) || false
                                      : inputName === "popularity"
                                      ? popularity.includes(check) || false
                                      : inputName === "ratings"
                                      ? ratings.includes(check) || false
                                      : inputName === "offers"
                                      ? offers.includes(check) || false
                                      : false
                                  } // Verifica si la opción está seleccionada.
                                  type="checkbox"
                                  id={check} // ID único para cada checkbox.
                                  onChange={(e) =>
                                    handleFilters(e, inputName, check) // Maneja el cambio en el filtro.
                                  }
                                />
                                <label htmlFor={check}> {check}</label>
                              </div>
                              <Link href="#">
                                <span className="shopsidebar__number">
                                  {/* Muestra la cantidad de productos que coinciden con el filtro */}
                                  (
                                  {
                                    allProducts?.filter(
                                      ({
                                        price,
                                        popularity: productPopularity,
                                        ratings: productRatings,
                                        offers: productOffers,
                                      }) =>
                                        (inputName === "priceRange"
                                          ? price >= parseInt(
                                              check.split("-")[0].replace("$", "")
                                            ) &&
                                            price <= parseInt(
                                              check
                                                .split("-")[1]
                                                .replace("$", "")
                                            )
                                          : inputName === "popularity"
                                          ? productPopularity === check
                                          : inputName === "ratings"
                                          ? productRatings === check
                                          : inputName === "offers"
                                          ? productOffers === check
                                          : "") === check
                                    )?.length
                                  }
                                  )
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar; // Exporta el componente para ser usado en otras partes de la aplicación.