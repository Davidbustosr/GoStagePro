const filter = () => {
  // Inicializa el filtro con todos los elementos visibles
  filterSelection("all");

  function filterSelection(c) {
    // Filtra los elementos según la categoría seleccionada
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = ""; // Si se selecciona "all", se muestra todo

    // Itera por todos los elementos y añade o elimina la clase "show"
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show"); // Remueve la clase "show" del elemento
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); // Añade la clase "show" si pertenece a la categoría
    }
  }

  function w3AddClass(element, name) {
    // Añade una clase a un elemento si no existe ya
    var i, arr1, arr2;
    arr1 = element.className.split(" "); // Convierte las clases actuales en un array
    arr2 = name.split(" "); // Convierte las clases nuevas en un array
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        // Añade la clase si no está ya presente
        element.className += " " + arr2[i];
      }
    }
  }

  function w3RemoveClass(element, name) {
    // Remueve una clase específica de un elemento
    var i, arr1, arr2;
    arr1 = element.className.split(" "); // Convierte las clases actuales en un array
    arr2 = name.split(" "); // Convierte las clases a eliminar en un array
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        // Elimina todas las ocurrencias de la clase en el array
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" "); // Convierte el array de nuevo a una cadena de texto
  }

  // Añade la clase "active" al botón actual para resaltarlo
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // Elimina la clase "active" de todos los botones
      for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
      }
      // Añade la clase "active" al botón que fue clickeado
      this.classList.add("active");
    });
  }

  // Retorna la función para filtrar elementos, permitiendo su uso externo
  return { filterSelection };
};

export default filter; // Exporta la función para ser utilizada en otros módulos