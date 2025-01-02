// Función para calcular el precio neto y el monto del descuento
const countDiscount = (price, disc) => {
  // Calcula el monto del descuento (si existe un descuento)
  // Si `disc` es `null` o `0`, retorna `null`
  const discAmount = disc ? (price * disc) / 100 : null;

  // Calcula el precio neto después de aplicar el descuento
  // Si `disc` no está definido o es `0`, retorna el precio original
  const netPrice = disc ? (price * (100 - disc)) / 100 : price;

  // Retorna un objeto con el precio neto (`netPrice`) y el monto del descuento (`discAmount`)
  return { netPrice, discAmount };
};

// Exporta la función para que pueda ser utilizada en otros archivos
export default countDiscount;