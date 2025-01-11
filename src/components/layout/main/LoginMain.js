// Importa el componente `HeroInner` que muestra el título y la ubicación actual de la página
import HeroInner from "@/components/sections/hero-banners/HeroInner";
// Importa el componente `LoginPrimary` que contiene los formularios de ingreso y registro
import LoginPrimary from "@/components/sections/login/LoginPrimary";
// Importa React para el uso de componentes
import React from "react";

// Define el componente `LoginMain` que organiza la página de login
const LoginMain = () => {
  return (
    <main>
      {/* Renderiza el componente `HeroInner` que muestra el título de la página y un breadcrumb */}
      <HeroInner title={"Login"} currentItem={"Login"} />
      {/* Renderiza el componente principal que contiene los formularios */}
      <LoginPrimary />
    </main>
  );
};

export default LoginMain; // Exporta el componente `LoginMain` para ser utilizado en otras partes del proyecto