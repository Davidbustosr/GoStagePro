const smoothScroll = () => {
  // Selecciona todos los enlaces <a> que tienen un atributo href que comienza con "#" (enlaces internos)
  var links = document.querySelectorAll('a[href^="#"]');

  // Si no hay enlaces internos en la página, no hace nada
  if (!links.length) {
    return; // Salida temprana si no hay enlaces que procesar
  }

  // Itera sobre cada enlace encontrado
  links.forEach(function (link) {
    // Agrega un evento de clic a cada enlace
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previene el comportamiento predeterminado del enlace (navegación inmediata)

      // Obtiene el ID del elemento objetivo desde el atributo href del enlace
      var targetId = this.getAttribute("href").substring(1);

      // Busca el elemento en la página que coincide con el ID
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Si el elemento objetivo existe, desplázate hacia él suavemente
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        // Si no existe, desplázate suavemente hacia la parte superior de la página
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }
    });
  });
};

export default smoothScroll; // Exporta la función para que pueda usarse en otros módulos