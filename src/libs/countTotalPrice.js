import countDiscount from "./countDiscount";

const countTotalPrice = (items) => {
  // Función para calcular el precio total de una lista de productos.
  
  let totalPrice; // Variable para almacenar el precio total calculado.

  // Verifica si hay elementos en la lista de productos.
  if (items?.length) {
    // Si hay elementos, calcula el precio total usando reduce.
    totalPrice = parseFloat(
      items?.reduce((ac, { price, quantity, disc }) => {
        // Calcula el precio neto del producto considerando el descuento.
        const { netPrice } = countDiscount(price, disc);

        // Acumula el precio total sumando la cantidad * precio neto de cada producto.
        return ac + quantity * netPrice;
      }, 0) // Valor inicial del acumulador es 0.
    );
  } else {
    // Si no hay elementos, el precio total es 0.
    totalPrice = 0;
  }

  // Retorna el precio total calculado.
  return totalPrice;
};

export default countTotalPrice; // Exporta la función para que pueda ser utilizada en otros módulos.