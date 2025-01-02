const controllSwiper = () => {
  // Selecciona todos los elementos con la clase "swiper" en el documento
  const swipers = document.querySelectorAll(".swiper");
  
  {
    // Itera sobre cada swiper encontrado
    swipers.forEach((swiper, idx) => {
      // Busca el contenedor de los controles dentro del swiper actual
      const controllerParent = swiper.querySelector(".slider__controls__wrap");

      // Verifica si el contenedor de controles existe
      if (controllerParent) {
        // Selecciona todos los botones "anterior" dentro del swiper
        const swiperPrevButtons = swiper.querySelectorAll(".swiper-button-prev");
        // Selecciona todos los botones "siguiente" dentro del swiper
        const swiperNextButtons = swiper.querySelectorAll(".swiper-button-next");
        // Selecciona el elemento de paginación del swiper
        const swiperPagination = swiper.querySelector(".swiper-pagination");

        // Copia las clases del segundo botón "anterior" al primero
        swiperPrevButtons[1].className
          .split(" ") // Divide las clases en un array
          .forEach((cls) => swiperPrevButtons[0].classList.add(cls)); // Añade cada clase al primer botón "anterior"

        // Copia las clases del segundo botón "siguiente" al primero
        swiperNextButtons[1].className
          .split(" ") // Divide las clases en un array
          .forEach((cls) => swiperNextButtons[0].classList.add(cls)); // Añade cada clase al primer botón "siguiente"

        // Copia el contenido HTML del segundo botón "siguiente" al primero
        swiperNextButtons[0].innerHTML = swiperNextButtons[1].innerHTML;
        // Copia el contenido HTML del segundo botón "anterior" al primero
        swiperPrevButtons[0].innerHTML = swiperPrevButtons[1].innerHTML;

        // Elimina el segundo botón "siguiente" del DOM
        swiperNextButtons[1].remove();
        // Elimina el segundo botón "anterior" del DOM
        swiperPrevButtons[1].remove();

        // Añade el primer botón "siguiente" al contenedor de controles
        controllerParent.append(swiperNextButtons[0]);
        // Añade el primer botón "anterior" al contenedor de controles
        controllerParent.append(swiperPrevButtons[0]);

        // Si existe un elemento de paginación, lo añade al contenedor de controles
        if (swiperPagination) {
          controllerParent.append(swiperPagination);
        }
      }
    });
  }
};

export default controllSwiper;