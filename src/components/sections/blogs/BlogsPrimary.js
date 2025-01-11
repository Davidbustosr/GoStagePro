"use client"; // Indica que este componente se ejecuta del lado del cliente en Next.js.
import BlogCard3 from "@/components/shared/cards/BlogCard3"; // Componente para mostrar cada tarjeta de blog.
import Nodata from "@/components/shared/no-data/Nodata"; // Componente para mostrar cuando no hay datos disponibles.
import Pagination from "@/components/shared/paginations/Pagination"; // Componente para manejar la paginación.
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar"; // Barra lateral que muestra opciones de navegación.
import usePagination from "@/hooks/usePagination"; // Hook para gestionar la lógica de paginación.
import useSearch from "@/hooks/useSearch"; // Hook para manejar la búsqueda.
import filterItems from "@/libs/filterItems"; // Función para filtrar elementos según ciertos criterios.
import getAllBlogs from "@/libs/getAllBlogs"; // Función que devuelve todos los blogs disponibles.
import CommonContext from "@/providers/CommonContext"; // Contexto global compartido para manejar estados.
import { useSearchParams } from "next/navigation"; // Hook para obtener parámetros de búsqueda desde la URL.

import { useEffect } from "react"; // Hook de React para manejar efectos secundarios.

const BlogsPrimary = () => {
  // Obtiene todos los blogs.
  const allBlogs = getAllBlogs();

  // Obtiene los parámetros de búsqueda de la URL (categoría y etiqueta).
  const category = useSearchParams().get("category");
  const tag = useSearchParams().get("tag");

  // Hook personalizado para manejar búsquedas.
  const {
    searchString, // Cadena de búsqueda ingresada por el usuario.
    searchedItems, // Elementos encontrados que coinciden con la búsqueda.
    previousSearchedItems, // Elementos encontrados en búsquedas anteriores.
    isShowSearch, // Indica si la búsqueda está activa.
    handleSearch, // Función para manejar el envío de búsqueda.
    handleSearchString, // Función para actualizar la cadena de búsqueda.
    startSearch, // Función para iniciar la búsqueda.
    closeSearch, // Función para cerrar la búsqueda.
    isShowQuickSearchResult, // Indica si se muestran resultados rápidos de búsqueda.
    setIsShowQuickSearchResult, // Función para establecer si se muestran resultados rápidos.
  } = useSearch(allBlogs, "/blogs");

  // Filtra los blogs según la búsqueda, la categoría o la etiqueta.
  const filteredBlogs =
    category === "planes"
      ? getAllBlogs()?.filter(({ id }) => id <= 4) // Filtra los blogs con id <= 4 para "Planes".
      : category === "piano"
      ? getAllBlogs()?.filter(({ id }) => id >= 5 && id <= 9) // Filtra los blogs con id 5-9 para "Piano".
      : category === "pad"
      ? getAllBlogs()?.filter(({ id }) => id >= 10 && id <= 14) // Filtra los blogs con id 10-14 para "Pad".
      : category === "synth"
      ? getAllBlogs()?.filter(({ id }) => id >= 15 && id <= 19) // Filtra los blogs con id 15-19 para "Synth".
      : category === "violin"
      ? getAllBlogs()?.filter(({ id }) => id >= 20 && id <= 21) // Filtra los blogs con id 20-21 para "Violin".
      : category === "trompeta"
      ? getAllBlogs()?.filter(({ id }) => id >= 22 && id <= 23) // Filtra los blogs con id 22-23 para "Trompeta".
      : category === "rhodes"
      ? getAllBlogs()?.filter(({ id }) => id >= 24 && id <= 25) // Filtra los blogs con id 24-25 para "Rhodes".
      : !isShowSearch || searchString === null || tag || category
      ? !previousSearchedItems || tag || category
        ? filterItems(
            allBlogs,
            category ? "category" : tag ? "tag" : "default", // Filtra por categoría o etiqueta si están presentes.
            category ? category : tag ? tag : "default" // Especifica el filtro.
          )
        : previousSearchedItems
      : searchedItems;

  // Hook personalizado para manejar la paginación.
  const {
    currentItems: blogs, // Blogs actuales que se muestran en la página.
    currentpage, // Página actual.
    setCurrentpage, // Función para cambiar la página actual.
    paginationItems, // Elementos de paginación (índices de página).
    totalPages, // Total de páginas disponibles.
    handleCurrentPage, // Función para manejar el cambio de página.
  } = usePagination(filteredBlogs);

  // Restablece la página actual a 0 cuando cambian los filtros.
  useEffect(() => {
    setCurrentpage(0);
  }, [tag, category, searchString, setCurrentpage]);

  return (
    <div
      className="service__details sp_top_140 sp_bottom_140 special__spacing"
      id="blogs"
    >
      <div className="container">
        <div className="row">
          {/* Barra lateral */}
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
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
              <BlogSidebar /> {/* Renderiza la barra lateral. */}
            </CommonContext>
          </div>

          {/* Sección principal de blogs */}
          <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
            <div className="row">
              {/* Si no hay blogs, muestra el componente de "No data". */}
              {!blogs?.length ? (
                <Nodata text={"INTÉNTALO MÁS TARDE."} />
              ) : (
                // Mapea y renderiza las tarjetas de blogs.
                blogs?.map((blog, idx) => (
                  <BlogCard3 key={idx} blog={blog} bg={"pink"} />
                ))
              )}
            </div>

            {/* Renderiza la paginación si hay más de una página. */}
            {totalPages > 1 ? (
              <Pagination
                items={paginationItems}
                handleCurrentPage={handleCurrentPage}
                currenIndex={currentpage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPrimary; // Exporta el componente para ser usado en otros módulos.