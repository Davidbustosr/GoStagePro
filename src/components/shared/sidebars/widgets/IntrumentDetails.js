import React from "react";

// Datos de ejemplo para cada instrumento
const instrumentData = {
  PIANOS: {
    description: "Sonidos cálidos y detallados para un acompañamiento versátil.",
    audios: [
      { title: "Gran Piano", src: "/audios/piano1.mp3" },
      { title: "Piano Jazz", src: "/audios/piano2.mp3" },
    ],
  },
  PADS: {
    description: "Pads suaves y envolventes para crear atmósferas únicas.",
    audios: [
      { title: "Warm Pad", src: "/audios/pad1.mp3" },
      { title: "Atmospheric Pad", src: "/audios/pad2.mp3" },
    ],
  },
  SYNTHS: {
    description: "Synths modernos y potentes para estilos electrónicos.",
    audios: [
      { title: "Lead Synth", src: "/audios/synth1.mp3" },
      { title: "Bass Synth", src: "/audios/synth2.mp3" },
    ],
  },
};

const InstrumentDetails = ({ category }) => {
  const instrument = instrumentData[category] || {};

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #1e1e2f, #292942)", // Fondo degradado oscuro
        borderRadius: "16px",
        padding: "25px",
        boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.6)", // Sombra pronunciada
        margin: "20px 0",
        color: "#fff",
        border: "2px solid #e43f5a", // Borde rosado vibrante
      }}
    >
      {/* Encabezado */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "2px solid #e43f5a",
          paddingBottom: "12px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 36 36"
          style={{ marginRight: "12px" }}
        >
          <circle cx="18" cy="18" r="18" fill="#e43f5a" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="14px"
            fontWeight="bold"
          >
            {category[0]}
          </text>
        </svg>
        <h4 style={{ margin: 0, color: "#e43f5a", fontWeight: "700" }}>
          {category}
        </h4>
      </div>

      {/* Descripción */}
      <div
        style={{
          background: "rgba(228, 63, 90, 0.2)", // Fondo semitransparente en rosado
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: 0, color: "#fff", fontSize: "16px" }}>
          {instrument.description}
        </p>
      </div>

      {/* Lista de audios */}
      <div>
        {instrument.audios?.map((audio, idx) => (
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
            <audio controls style={{ flex: "1", marginLeft: "10px" }}>
              <source src={audio.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentDetails;