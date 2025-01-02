const counterUP = () => {
  // Activación de CounterUp: Anima contadores cuando el usuario hace scroll hacia la sección.

  // Obtiene el elemento principal que contiene los contadores (por su ID)
  const wrapper = document.getElementById("funfactId");

  // Verifica si el wrapper existe en el DOM antes de proceder
  if (wrapper) {
    // Obtiene todos los elementos con la clase "js-counter" dentro del wrapper
    const counters = wrapper.querySelectorAll(".js-counter");

    // Duración de la animación en milisegundos (1 segundo)
    const duration = 1000;

    // Variable para asegurarse de que los contadores se activen solo una vez
    let isCounted = false;

    // Evento que escucha el desplazamiento (scroll) de la página
    document.addEventListener("scroll", function () {
      // Calcula la posición del wrapper relativa a la ventana del navegador
      const wrapperPos = wrapper.offsetTop - window.innerHeight;

      // Verifica si el usuario ha hecho scroll más allá de la posición del wrapper
      // y si los contadores no han sido activados aún
      if (!isCounted && window.scrollY > wrapperPos) {
        // Itera sobre cada contador para iniciar la animación
        counters.forEach((counter) => {
          // Obtiene el valor final del contador desde el atributo `data-count`
          const countTo = counter.dataset.count;

          // Calcula cuánto debe incrementarse el contador por milisegundo
          const countPerMs = countTo / duration;

          // Inicializa el conteo en 0
          let currentCount = 0;

          // Configura un intervalo que actualiza el contador cada milisegundo
          const countInterval = setInterval(function () {
            // Si el conteo ha alcanzado o superado el valor final, detiene el intervalo
            if (currentCount >= countTo) {
              clearInterval(countInterval);
            }
            // Actualiza el contenido del elemento con el valor redondeado del conteo actual
            counter.textContent = Math.round(currentCount);

            // Incrementa el conteo basado en la cantidad por milisegundo
            currentCount = currentCount + countPerMs;
          }, 1); // Intervalo de actualización: 1ms
        });

        // Marca los contadores como activados para evitar que se reinicien
        isCounted = true;
      }
    });
  }
};

// Exporta la función para que pueda ser utilizada en otros archivos o módulos
export default counterUP;