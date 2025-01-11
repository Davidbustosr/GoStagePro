// Función para agregar elementos al localStorage
const addItemsToLocalstorage = (itemName, items) => {
  // Convierte el objeto o arreglo `items` en una cadena JSON para que pueda ser almacenado en localStorage
  const itemsToLocalstorage = JSON.stringify(items);

  // Guarda la cadena JSON en localStorage con la clave especificada por `itemName`
  localStorage.setItem(itemName, itemsToLocalstorage);
};

// Exporta la función para que pueda ser utilizada en otras partes del proyecto
export default addItemsToLocalstorage;