"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import Nodata from "@/components/shared/no-data/Nodata";
import Pagination from "@/components/shared/paginations/Pagination";
import SortInputs from "@/components/shared/shop/SortInputs";
import ShopSidebar from "@/components/shared/sidebars/ShopSidebar";
import usePagination from "@/hooks/usePagination";
import getAllProducts from "@/libs/getAllProducts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Obtenemos todos los productos antes de aplicar filtros
const allProductsBeforeFilter = getAllProducts();

// Función para filtrar productos según los filtros seleccionados
const getAllFilteredProducts = (filterObject, isReset) => {
  const {
    availability: availabilityNew,
    priceRange: newPriceRange,
    popularity: newPopularity,
    rating: newRating,
    offer: newOffer,
  } = filterObject;

  const filteredProducts = isReset
    ? allProductsBeforeFilter
    : allProductsBeforeFilter?.filter(
        ({ availability, price, popularity, rating, offer }) =>
          (!availabilityNew?.length || availabilityNew.includes(availability)) &&
          (!newPriceRange?.length ||
            newPriceRange.some(
              (range) => price >= range[0] && price <= range[1]
            )) &&
          (!newPopularity?.length || newPopularity.includes(popularity)) &&
          (!newRating?.length || newRating.includes(rating)) &&
          (!newOffer?.length || newOffer.includes(offer))
      );

  return filteredProducts;
};

// Función para ordenar los productos según el criterio seleccionado
const getSortedProduct = (allProducts, sortInput) => {
  switch (sortInput) {
    case "featured":
      return [...allProducts];
    case "best-selling":
      return [...allProducts]?.filter(({ bestSeller }) => bestSeller);
    case "title-ascending":
      return [...allProducts]?.sort((a, b) => a.title.localeCompare(b.title));
    case "title-descending":
      return [...allProducts]?.sort((a, b) => b.title.localeCompare(a.title));
    case "price-ascending":
      return [...allProducts]?.sort((a, b) => a.price - b.price);
    case "price-descending":
      return [...allProducts]?.sort((a, b) => b.price - a.price);
    case "created-descending":
      return [...allProducts]?.sort((a, b) => b.date - a.date);
    case "created-ascending":
      return [...allProducts]?.sort((a, b) => a.date - b.date);
    default:
      return [...allProducts];
  }
};

const SopPrimary = ({ listIndex }) => {
  const category = useSearchParams().get("category");
  const offer = useSearchParams().get("offer");
  const initialActiveIndex = category || offer ? 2 : listIndex;

  // Estados para manejar los filtros
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [popularity, setPopularity] = useState([]);
  const [rating, setRating] = useState([]);
  const [offerFilters, setOfferFilters] = useState([]);
  const [reset, setReset] = useState(false);
  const [sortInput, setSortInput] = useState("featured");
  const [currentListIndex, setCurrentListIndex] = useState(initialActiveIndex);

  // Parámetros para filtrar los productos
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterInputs = {
    availability,
    priceRange,
    popularity,
    rating,
    offer: offerFilters,
  };

  // Filtrar productos según los filtros aplicados
  const allProducts = getAllFilteredProducts(filterInputs, reset);

  // Ordenar productos según el tipo de orden seleccionado
  const filteredProducts = getSortedProduct(allProducts, sortInput);

  // Definir el límite de productos a mostrar según la vista seleccionada
  const limit = currentListIndex === 0 ? 6 : currentListIndex === 1 ? 9 : 16;
  const totalProducts = filteredProducts?.length;

  // Función para manejar filtros
  const handleFilters = (e, inputName, value) => {
    switch (inputName) {
      case "availability":
        setAvailability((prev) =>
          e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
        break;
      case "priceRange":
        setPriceRange((prev) =>
          e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
        break;
      case "popularity":
        setPopularity((prev) =>
          e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
        break;
      case "rating":
        setRating((prev) =>
          e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
        break;
      case "offer":
        setOfferFilters((prev) =>
          e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
        break;
      default:
        break;
    }
  };

  // Función para resetear todos los filtros
  const handleReset = () => {
    setAvailability([]);
    setPriceRange([]);
    setPopularity([]);
    setRating([]);
    setOfferFilters([]);
    setReset(true);
  };

  // Paginación
  const {
    currentItems: products,
    currentpage,
    setCurrentpage,
    paginationItems,
    totalPages,
    handleCurrentPage,
    firstItem,
    lastItem,
  } = usePagination(filteredProducts, limit);

  useEffect(() => {
    setCurrentpage(0);
  }, [filterInputs, setCurrentpage]);

  return (
    <section className="shop__page__wrap sp_top_100 sp_bottom_140" id="shop">
      <div className="container">
        <div className="row">
          {/* Sidebar con filtros */}
          <ShopSidebar
            handleFilters={handleFilters}
            availability={availability}
            priceRange={priceRange}
            popularity={popularity}
            rating={rating}
            offer={offerFilters}
            handleReset={handleReset}
          />

          {/* Productos */}
          <div className="col-xl-9">
            <div className="shoptab__shoing__wrap">
              <SortInputs
                sortInput={sortInput}
                setSortInput={setSortInput}
                setIsPriceRange={() => {}}
              />
              <p>
                Showing {firstItem + 1} -{" "}
                {lastItem > totalProducts ? totalProducts : lastItem} of{" "}
                {totalProducts} results
              </p>
            </div>

            {totalProducts === 0 ? (
              <Nodata text="No products found" />
            ) : (
              <div className="tab-content" id="myTabContent">
                <div className="row">
                  {products?.map((product, idx) => (
                    <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <Pagination
                items={paginationItems}
                currentPage={currentpage}
                onPageChange={handleCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SopPrimary;