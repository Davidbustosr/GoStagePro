const stickyHeader = () => {
  // Función para calcular la posición superior de un elemento en la página
  function TopOffset(el) {
    // Obtiene las dimensiones del elemento en relación al viewport
    let rect = el.getBoundingClientRect(),
      // Calcula el desplazamiento vertical actual de la página
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Retorna la posición superior del elemento relativa al documento
    return { top: rect.top + scrollTop };
  }

  // Función para gestionar el comportamiento del encabezado pegajoso (sticky header)
  function ScrollSticky() {
    // Selecciona el contenedor principal del encabezado
    const headerStickyWrapper = document.querySelector("header");
    // Selecciona el elemento que debe recibir la clase "sticky"
    const headerStickyTarget = document.querySelector(".header__sticky");

    // Comprueba si el elemento objetivo existe antes de proceder
    if (headerStickyTarget) {
      // Escucha el evento de desplazamiento (scroll) en la ventana
      window.addEventListener("scroll", function () {
        // Obtiene la posición superior del contenedor del encabezado
        let StickyTargetElement = TopOffset(headerStickyWrapper);
        let TargetElementTopOffset = StickyTargetElement.top;

        // Si el desplazamiento vertical actual es mayor que la posición superior del contenedor
        if (window.scrollY > TargetElementTopOffset) {
          // Agrega la clase "sticky" al elemento objetivo para hacerlo pegajoso
          headerStickyTarget.classList.add("sticky");
        } else {
          // Elimina la clase "sticky" si el desplazamiento es menor
          headerStickyTarget.classList.remove("sticky");
        }
      });
    }
  }

  // Llama a la función que gestiona el comportamiento sticky
  ScrollSticky();
};

export default stickyHeader; // Exporta la función para que pueda usarse en otros módulos