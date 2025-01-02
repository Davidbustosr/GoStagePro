"use client"; // Indica que este código está diseñado para ejecutarse en el cliente (navegador)

// Importa las funciones necesarias de React para crear y consumir contextos
import React, { createContext, useContext } from "react";

// Crea un contexto común con un valor inicial de `null`
const commonContext = createContext(null);

// Hook personalizado para consumir el contexto de manera sencilla
export const useCommonContext = () => {
  return useContext(commonContext); // Devuelve el valor actual del contexto
};

// Componente que envuelve otros componentes y proporciona un valor para el contexto
const CommonContext = ({ children, value }) => {
  return (
    // Proveedor del contexto que pasa el valor recibido como prop a los componentes hijos
    <commonContext.Provider value={value}>
      {children} {/* Renderiza los hijos dentro del proveedor */}
    </commonContext.Provider>
  );
};

// Exporta el componente del proveedor de contexto para su uso en la aplicación
export default CommonContext;