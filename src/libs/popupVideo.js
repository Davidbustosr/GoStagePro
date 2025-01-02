const popupVideo = () => {
  // Verifica si el código se ejecuta en un entorno de navegador (window está disponible)
  if (typeof window !== "undefined") {
    // Importa dinámicamente el módulo "glightbox" solo cuando se necesita
    import("glightbox").then((module) => {
      // Obtén el objeto GLightbox del módulo importado
      let GLightbox = module.default;

      // HTML personalizado para la estructura del lightbox
      const customLightboxHTML = `
        <div id="glightbox-body" class="glightbox-container">
          <div class="gloader visible"></div> <!-- Indicador de carga -->
          <div class="goverlay"></div> <!-- Capa de superposición -->
          <div class="gcontainer">
            <div id="glightbox-slider" class="gslider"></div> <!-- Contenedor del slider -->
            <button 
              class="gnext gbtn" 
              tabindex="0" 
              aria-label="Next" 
              data-customattribute="example">
              {nextSVG} <!-- Icono de siguiente -->
            </button>
            <button 
              class="gprev gbtn" 
              tabindex="1" 
              aria-label="Previous">
              {prevSVG} <!-- Icono de anterior -->
            </button>
            <button 
              class="gclose gbtn" 
              tabindex="2" 
              aria-label="Close">
              {closeSVG} <!-- Icono de cerrar -->
            </button>
          </div>
        </div>`;

      // Inicializa GLightbox con opciones personalizadas
      GLightbox({
        touchNavigation: true, // Permite la navegación táctil
        lightboxHTML: customLightboxHTML, // Usa el HTML personalizado definido arriba
        loop: true, // Habilita el bucle para repetir la navegación
      });
    });
  }
};

export default popupVideo; // Exporta la función para que pueda usarse en otros módulos