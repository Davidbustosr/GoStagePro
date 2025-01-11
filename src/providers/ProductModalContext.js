"use client"; // Indica que este código está diseñado para ejecutarse en el cliente (navegador)

// Importa el componente modal de detalles del producto
import ProductDetailsModal from "@/components/shared/modals/ProductDetailsModal";
// Importa una función para obtener todos los productos
import getAllProducts from "@/libs/getAllProducts";
// Importa funciones necesarias de React para crear y consumir contextos
import { createContext, useContext, useState } from "react";

// Crea un contexto llamado `ProductModalContext` con un valor inicial de `null`
const ProductModalContext = createContext(null);

// Proveedor del contexto para manejar el estado del modal de detalles del producto
const ProductModalProvider = ({ children }) => {
  // Obtiene todos los productos disponibles usando la función `getAllProducts`
  const allProducts = getAllProducts();

  // Define un estado que almacena el producto actual a mostrar en el modal
  // Por defecto, selecciona el primer producto de la lista
  const [currentProduct, setCurrentProduct] = useState(allProducts[0]);

  return (
    <ProductModalContext.Provider value={setCurrentProduct}>
      {children} {/* Renderiza los componentes hijos dentro del proveedor */}
      <ProductDetailsModal product={currentProduct} />
      {/* Renderiza el modal con los detalles del producto actual */}
    </ProductModalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto `ProductModalContext`
export const useProductDetailContext = () => {
  return useContext(ProductModalContext); // Devuelve la función para actualizar el producto actual
};

// Exporta el proveedor del contexto para que pueda ser utilizado en otras partes de la aplicación
export default ProductModalProvider;