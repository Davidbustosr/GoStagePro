// Importa el componente `HeroInner` que muestra el título y la ubicación actual de la página
import HeroInner from "@/components/sections/hero-banners/HeroInner";
// Importa el componente `SignUpPrimary` que contendrá el formulario de registro
import SignUpPrimary from "@/components/sections/login/SignUpPrimary";
// Importa React para el uso de componentes
import React from "react";

// Define el componente `SignUpMain` que organiza la página de registro
const SignUpMain = () => {
  return (
    <main>
      {/* Renderiza el componente `HeroInner` que muestra el título de la página y un breadcrumb */}
      <HeroInner title={"Sign Up"} currentItem={"Sign Up"} />
      {/* Renderiza el componente principal que contiene el formulario de registro */}
      <SignUpPrimary />
    </main>
  );
};

export default SignUpMain; // Exporta el componente `SignUpMain` para ser utilizado en otras partes del proyecto.