"use client";
import { useState } from "react";
import Image from "next/image";

// Definir los audios de ejemplo para todos los instrumentos
const instrumentOptions = {
  PIANOS: {
    description: "Sonidos cálidos y detallados, ideales para cualquier entorno musical.",
    audios: [
      { title: "Gran Piano", src: "/audios/demo.mp3" },
      { title: "Piano Jazz", src: "/audios/demo.mp3" },
      { title: "Piano Blues", src: "/audios/demo.mp3" },
      { title: "Grand Piano", src: "/audios/demo.mp3" },
      { title: "Piano Riffs", src: "/audios/demo.mp3" },
    ],
  },
  PADS: {
    description: "Pads suaves y envolventes para crear atmósferas únicas.",
    audios: [
      { title: "Warm Pad", src: "/audios/demo.mp3" },
      { title: "Atmospheric Pad", src: "/audios/demo.mp3" },
      { title: "Deep Pad", src: "/audios/demo.mp3" },
      { title: "Chill Pad", src: "/audios/demo.mp3" },
      { title: "Vibrant Pad", src: "/audios/demo.mp3" },
    ],
  },
  SYNTHS: {
    description: "Synths modernos y potentes para estilos electrónicos.",
    audios: [
      { title: "Lead Synth", src: "/audios/demo.mp3" },
      { title: "Bass Synth", src: "/audios/demo.mp3" },
      { title: "Arp Synth", src: "/audios/demo.mp3" },
      { title: "Pluck Synth", src: "/audios/demo.mp3" },
      { title: "Deep Synth", src: "/audios/demo.mp3" },
    ],
  },
  VIOLINS: {
    description: "Sonidos de violín clásicos y modernos para cualquier estilo.",
    audios: [
      { title: "Violin Solo", src: "/audios/demo.mp3" },
      { title: "Classical Violin", src: "/audios/demo.mp3" },
      { title: "Electric Violin", src: "/audios/demo.mp3" },
      { title: "Smooth Violin", src: "/audios/demo.mp3" },
      { title: "Dark Violin", src: "/audios/demo.mp3" },
    ],
  },
  TROMPETAS: {
    description: "Trompetas potentes y suaves, perfectas para cualquier género musical.",
    audios: [
      { title: "Jazz Trumpet", src: "/audios/demo.mp3" },
      { title: "Classic Trumpet", src: "/audios/demo.mp3" },
      { title: "Trumpet Solo", src: "/audios/demo.mp3" },
      { title: "Smooth Trumpet", src: "/audios/demo.mp3" },
      { title: "Funky Trumpet", src: "/audios/demo.mp3" },
    ],
  },
  RHODES: {
    description: "Sonidos suaves de Rhodes perfectos para jazz y soul.",
    audios: [
      { title: "Classic Rhodes", src: "/audios/demo.mp3" },
      { title: "Warm Rhodes", src: "/audios/demo.mp3" },
      { title: "Funky Rhodes", src: "/audios/demo.mp3" },
      { title: "Rhodes Solo", src: "/audios/demo.mp3" },
      { title: "Rhodes Smooth", src: "/audios/demo.mp3" },
    ],
  },
};

// Plan Pro
const planPro = ["PIANOS", "PADS", "SYNTHS", "VIOLINS", "TROMPETAS", "RHODES"];

const CrearPlantillaPage = () => {
  const [selectedInstruments, setSelectedInstruments] = useState({});
  const [selectedAudio, setSelectedAudio] = useState("");
  const [currentInstrumentIndex, setCurrentInstrumentIndex] = useState(0);

  const handleInstrumentSelect = (instrument, audioSrc) => {
    setSelectedInstruments({
      ...selectedInstruments,
      [instrument]: audioSrc,
    });
    // Avanzar al siguiente instrumento después de seleccionar
    if (currentInstrumentIndex < planPro.length - 1) {
      setCurrentInstrumentIndex(currentInstrumentIndex + 1);
    }
  };

  const handleAudioSelect = (audioSrc) => {
    setSelectedAudio(audioSrc);
  };

  const handleBack = () => {
    if (currentInstrumentIndex > 0) {
      setCurrentInstrumentIndex(currentInstrumentIndex - 1);
    }
  };

  const currentInstrument = planPro[currentInstrumentIndex] || "PIANOS"; // Default to "PIANOS" if undefined

  return (
    <div
      style={{
        backgroundColor: "#1a1a2e",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#7a2a91",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Crear Plantilla - Plan Pro
      </h1>

      {/* Mostrar el instrumento actual seleccionado */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h3 style={{ color: "#7a2a91", textAlign: "left" }}>
            {currentInstrument.charAt(0).toUpperCase() + currentInstrument.slice(1)}
          </h3>
          <div>
            <p style={{ color: "#fff" }}>
              {instrumentOptions[currentInstrument]?.description || "Descripción no disponible."}
            </p>
            {instrumentOptions[currentInstrument]?.audios?.map((audio, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingBottom: "10px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  {audio.title}
                </p>
                <audio
                  controls
                  style={{ flex: "1", marginLeft: "10px" }}
                  onPlay={() => handleInstrumentSelect(currentInstrument, audio.src)}
                >
                  <source src={audio.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>

        {/* Selección de audio final */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <select
            onChange={(e) => handleAudioSelect(e.target.value)}
            value={selectedAudio}
            style={{
              padding: "10px",
              marginTop: "0px",
              borderRadius: "8px",
              backgroundColor: "#9b4dca",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <option value="">Selecciona un audio</option>
            {instrumentOptions[currentInstrument]?.audios?.map((audio, idx) => (
              <option key={idx} value={audio.src}>
                {audio.title}
              </option>
            ))}
          </select>
        </div>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {/* Botón Volver Atrás */}
          {currentInstrumentIndex > 0 && (
            <button
              style={{
                backgroundColor: "#9b4dca",
                color: "#fff",
                border: "none",
                borderRadius: "50px", // Bordes redondeados
                padding: "12px 35px", // Botón con mayor padding
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease", // Agrega animación
              }}
              onClick={handleBack}
            >
              Volver Atrás
            </button>
          )}

          {/* Botón Continuar */}
          <button
            style={{
              backgroundColor: "#9b4dca",
              color: "#fff",
              border: "none",
              borderRadius: "50px", // Bordes redondeados
              padding: "12px 35px", // Botón con mayor padding
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease", // Agrega animación
            }}
            disabled={!selectedAudio}
            onClick={() => setCurrentInstrumentIndex(currentInstrumentIndex + 1)}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrearPlantillaPage;