"use client";

import { useState } from "react";

const usePagination = (filteredItems, currentLimit) => {
  // Estado para manejar la página actual.
  const [currentpage, setCurrentpage] = useState(0);

  // Lógica de paginación.
  const limit = currentLimit ? currentLimit : 6; // Define el límite de elementos por página (predeterminado: 6).
  const skip = limit * currentpage; // Calcula los elementos que se deben omitir.
  const currentItems = filteredItems?.slice(skip, skip + limit); // Selecciona los elementos de la página actual.
  const totalPages = Math.ceil(filteredItems?.length / limit); // Calcula el número total de páginas.
  const paginationItems = [...Array(totalPages)]; // Crea un arreglo para representar las páginas.

  // Cambia la página actual.
  const handleCurrentPage = (e, id) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace.
    setCurrentpage(id); // Actualiza la página actual.
  };

  // Devuelve los elementos necesarios para manejar la paginación.
  return {
    currentItems,
    currentpage,
    setCurrentpage,
    paginationItems,
    totalPages,
    handleCurrentPage,
    firstItem: skip + 1, // Índice del primer elemento en la página actual.
    lastItem: skip + limit, // Índice del último elemento en la página actual.
  };
};

export default usePagination; // Exporta el hook como módulo predeterminado.