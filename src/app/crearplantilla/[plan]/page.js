// Indica que este archivo utiliza React con soporte de cliente en Next.js
"use client";

// Importaciones necesarias
import Image from "next/image"; // Componente de Next.js para manejar imágenes optimizadas
import React, { useState } from "react"; // Importamos useState para manejar estados en el componente
import instrumentData from "@/intrumentos-audios/instrumentdata"; // Datos relacionados con instrumentos y audios

// Mockups por estado para cada plan (con rutas de imágenes)
const mockupStates = {
  basico: [
    "/mockups/empty.png",
    "/mockups/piano-active.png",
    "/mockups/piano-pad-active.png",
  ],
  inicial: [
    "/mockups/empty.png",
    "/mockups/piano-active.png",
    "/mockups/piano-pad-active.png",
  ],
  intermedio: [
    "/mockups/empty.png",
    "/mockups/piano-active.png",
    "/mockups/piano-pad-active.png",
    "/mockups/synth-active.png",
  ],
  pro: [
    "/mockups/empty.png",
    "/mockups/piano-active.png",
    "/mockups/piano-pad-active.png",
    "/mockups/synth-active.png",
    "/mockups/full-active.png",
  ],
};

// Configuración de instrumentos habilitados según el plan
const planConfig = {
  basico: ["PIANOS", "PADS"],
  inicial: ["PIANOS", "PADS"],
  intermedio: ["PIANOS", "PADS", "SYNTHS"],
  pro: ["PIANOS", "PADS", "SYNTHS", "OTHERS"], // Instrumentos adicionales para el plan pro
};

// Componente principal para crear la plantilla
const CrearPlantillaPage = ({ params }) => {
  const { plan } = params; // Extrae el plan desde los parámetros de la URL
  const instrumentsForPlan = planConfig[plan]; // Obtiene los instrumentos habilitados para el plan actual
  const [selectedInstruments, setSelectedInstruments] = useState([]); // Estado para almacenar instrumentos seleccionados
  const [mockupIndex, setMockupIndex] = useState(0); // Índice actual del mockup mostrado

  // Maneja la selección de un instrumento
  const handleInstrumentSelect = (instrument) => {
    // Verifica que el instrumento no esté ya seleccionado
    if (!selectedInstruments.includes(instrument)) {
      setSelectedInstruments([...selectedInstruments, instrument]); // Agrega el instrumento seleccionado
      setMockupIndex(mockupIndex + 1); // Avanza al siguiente estado del mockup
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1a1a2e", // Fondo oscuro
        color: "#fff", // Texto blanco
        minHeight: "100vh", // Altura mínima igual a la pantalla
        padding: "30px 20px", // Espaciado interno
      }}
    >
      {/* Título principal */}
      <h1
        style={{
          textAlign: "center",
          color: "#e43f5a", // Color rojo
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Crear Plantilla: {plan.charAt(0).toUpperCase() + plan.slice(1)}
      </h1>

      {/* Mockup visual que cambia según la selección */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Image
          src={mockupStates[plan][mockupIndex]} // Imagen correspondiente al estado actual del mockup
          alt="Mockup"
          width={800}
          height={500}
          style={{
            borderRadius: "12px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Sombra para destacar el mockup
          }}
          priority // Optimiza la carga de la imagen
        />
      </div>

      {/* Lista de instrumentos disponibles */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px", // Espaciado entre elementos
        }}
      >
        {instrumentsForPlan.map((instrument, index) => (
          <div key={index} style={{ width: "100%", maxWidth: "800px" }}>
            {/* Nombre del instrumento */}
            <h3 style={{ color: "#e43f5a", textAlign: "left" }}>
              {instrument.charAt(0).toUpperCase() + instrument.slice(1)}
            </h3>
          
            <button
              onClick={() => handleInstrumentSelect(instrument)}
              className="btn"
              style={{
                backgroundColor: selectedInstruments.includes(instrument)
                  ? "#4caf50" // Verde si ya está seleccionado
                  : "#162447", // Fondo oscuro si no está seleccionado
                color: "#fff", // Texto blanco
                border: "none",
                borderRadius: "8px", // Bordes redondeados
                padding: "15px 20px",
                fontWeight: "bold",
                marginTop: "10px",
                cursor: selectedInstruments.includes(instrument)
                  ? "not-allowed" // Cursor bloqueado si ya está seleccionado
                  : "pointer", // Cursor pointer si es seleccionable
              }}
              disabled={selectedInstruments.includes(instrument)} // Deshabilita si ya está seleccionado
            >
              {selectedInstruments.includes(instrument)
                ? "Seleccionado" // Texto cuando ya está seleccionado
                : "Seleccionar"} {/* Texto para seleccionar */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrearPlantillaPage;