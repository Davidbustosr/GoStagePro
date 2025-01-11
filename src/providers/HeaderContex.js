"use client"; // Indica que este código está diseñado para ejecutarse en el cliente (navegador)

// Importa funciones necesarias de React para crear y consumir contextos
import { createContext, useContext } from "react";

// Crea un contexto llamado `headerContex` con un valor inicial de `null`
const headerContex = createContext(null);

// Componente que proporciona el contexto para sus componentes hijos
const HeaderContex = ({ value, children }) => {
  return (
    // Proveedor del contexto que pasa el valor recibido como prop a los componentes hijos
    <headerContex.Provider value={value}>
      {children} {/* Renderiza los hijos dentro del proveedor */}
    </headerContex.Provider>
  );
};

// Hook personalizado para consumir el contexto `headerContex` fácilmente
export const useHeaderContex = () => {
  const value = useContext(headerContex); // Obtiene el valor del contexto
  return value; // Devuelve el valor para que pueda ser utilizado por los componentes que llaman a este hook
};

// Exporta el proveedor del contexto para que pueda ser utilizado en otras partes de la aplicación
export default HeaderContex;