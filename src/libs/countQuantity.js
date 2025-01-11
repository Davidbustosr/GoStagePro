const countQuantity = () => {
  // Selecciona todos los botones con la clase "qty-btn-plus" (botones para incrementar cantidad)
  var buttonsPlus = document.querySelectorAll(".qty-btn-plus");

  // Selecciona todos los botones con la clase "qty-btn-minus" (botones para decrementar cantidad)
  var buttonsMinus = document.querySelectorAll(".qty-btn-minus");

  // Itera sobre cada botón de incremento
  buttonsPlus.forEach(function (buttonPlus) {
    // Agrega un evento "click" a cada botón de incremento
    buttonPlus.addEventListener("click", function () {
      // Encuentra el input de cantidad dentro del contenedor más cercano con la clase "qty-container"
      var $n = this.closest(".qty-container").querySelector(".input-qty");

      // Incrementa el valor numérico del input en 1
      $n.value = Number($n.value) + 1;
    });
  });

  // Itera sobre cada botón de decremento
  buttonsMinus.forEach(function (buttonMinus) {
    // Agrega un evento "click" a cada botón de decremento
    buttonMinus.addEventListener("click", function () {
      // Encuentra el input de cantidad dentro del contenedor más cercano con la clase "qty-container"
      var $n = this.closest(".qty-container").querySelector(".input-qty");

      // Convierte el valor actual del input en un número
      var amount = Number($n.value);

      // Verifica si el valor actual es mayor a 1 (para evitar valores negativos o cero)
      if (amount > 1) {
        // Decrementa el valor numérico del input en 1
        $n.value = amount - 1;
      }
    });
  });
};

// Exporta la función para que pueda ser utilizada en otros módulos o archivos
export default countQuantity;