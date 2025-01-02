const filterItems = (items, collection, filterItem) => {
  // Esta función filtra una lista de elementos (items) según una colección específica
  // ('category', 'tag', 'search', etc.) y un valor de filtro (filterItem).

  switch (collection) {
    case "category":
      // Si el filtro es "planes", devuelve los primeros cuatro elementos (id <= 4).
      if (filterItem === "planes") {
        return items?.filter(({ id }) => id <= 4);
      }

      // Si el filtro es "piano", devuelve los elementos con id >= 5 y <= 9.
      if (filterItem === "piano") {
        return items?.filter(({ id }) => id >= 5 && id <= 9);
      }

      // Si el filtro es "pad", devuelve los elementos con id >= 10 y <= 14.
      if (filterItem === "pad") {
        return items?.filter(({ id }) => id >= 10 && id <= 14);
      }

      // Si el filtro es "synth", devuelve los elementos con id >= 15 y <= 19.
      if (filterItem === "synth") {
        return items?.filter(({ id }) => id >= 15 && id <= 19);
      }

      // Si el filtro es "violin", devuelve los elementos con id >= 20 y <= 21.
      if (filterItem === "violin") {
        return items?.filter(({ id }) => id >= 20 && id <= 21);
      }

      // Si el filtro es "trompeta", devuelve los elementos con id >= 22 y <= 23.
      if (filterItem === "trompeta") {
        return items?.filter(({ id }) => id >= 22 && id <= 23);
      }

      // Si el filtro es "rhodes", devuelve los elementos con id >= 24 y <= 25.
      if (filterItem === "rhodes") {
        return items?.filter(({ id }) => id >= 24 && id <= 25);
      }

      // Si no es un caso especial, filtra los elementos por la categoría.
      return items?.filter(
        ({ category }) =>
          category?.toLowerCase()?.split(" ").join("-") === filterItem // Verifica que 'category' existe antes de llamar a 'toLowerCase'.
      );

    case "tag":
      // Filtra los elementos por la etiqueta (tag).
      return items?.filter(
        ({ tag }) =>
          tag?.toLowerCase()?.split(" ").join("-") === filterItem // Verifica que 'tag' existe antes de llamar a 'toLowerCase'.
      );

    case "search":
      // Filtra los elementos según un término de búsqueda.
      if (!filterItem) return [];
      const searchText = new RegExp(filterItem, "i");
      return items?.filter(({ title }) => searchText.test(title));

    default:
      // Si no se proporciona una colección válida, devuelve todos los elementos sin filtrar.
      return items;
  }
};

export default filterItems;