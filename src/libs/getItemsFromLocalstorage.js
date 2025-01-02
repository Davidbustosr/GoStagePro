// Función para obtener elementos del LocalStorage
const getItemsFromLocalstorage = (itemName) => {
  // Intenta obtener el elemento del LocalStorage usando el nombre proporcionado
  let itemsFromLocastorage = localStorage.getItem(itemName);

  // Si el elemento existe, parsea el JSON para convertirlo en un objeto/array utilizable
  if (itemsFromLocastorage) {
    itemsFromLocastorage = JSON.parse(itemsFromLocastorage);
  } else {
    // Si el elemento no existe, retorna null como valor predeterminado
    itemsFromLocastorage = null;
  }

  // Retorna los elementos obtenidos del LocalStorage o null si no existían
  return itemsFromLocastorage;
};

// Exporta la función para que pueda ser utilizada en otros módulos
export default getItemsFromLocalstorage;