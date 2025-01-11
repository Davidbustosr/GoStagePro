const typeWriter = () => {
  // Clase que maneja la funcionalidad de escritura
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      // Elemento HTML donde se muestra el texto
      this.txtElement = txtElement;
      // Lista de palabras para escribir
      this.words = words;
      // Texto actualmente mostrado
      this.txt = "";
      // Índice de la palabra actual
      this.wordIndex = 0;
      // Tiempo de espera entre palabras
      this.wait = parseInt(wait, 8); // Convierte el valor de espera a número
      // Indica si está eliminando texto
      this.isDeleting = false;
      // Inicia el proceso de escritura
      this.type();
    }

    // Método que maneja la escritura y eliminación de caracteres
    type() {
      // Obtiene el índice actual de la palabra en la lista
      const current = this.wordIndex % this.words.length;
      // Obtiene el texto completo de la palabra actual
      const fullTxt = this.words[current];

      // Verifica si está eliminando texto
      if (this.isDeleting) {
        // Elimina un carácter
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Agrega un carácter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Inserta el texto en el elemento HTML
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Velocidad inicial de escritura
      let typeSpeed = 100;

      // Ajusta la velocidad si está eliminando texto
      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // Verifica si la palabra está completa
      if (!this.isDeleting && this.txt === fullTxt) {
        // Hace una pausa al final
        typeSpeed = this.wait;
        // Cambia el estado para comenzar a eliminar texto
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        // Cambia el estado para comenzar a escribir la siguiente palabra
        this.isDeleting = false;
        this.wordIndex++;
        // Pausa antes de comenzar a escribir
        typeSpeed = 300;
      }

      // Llama recursivamente al método type después de un tiempo
      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Inicializa la funcionalidad
  function init() {
    // Selecciona el elemento HTML donde se mostrará el texto
    const txtElement = document.querySelector(".txt-type");
    if (!txtElement) return; // Si no hay un elemento, termina la ejecución
    // Obtiene la lista de palabras desde un atributo data
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    // Obtiene el tiempo de espera desde un atributo data
    const wait = txtElement.getAttribute("data-wait");
    // Crea una nueva instancia de TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  // Llama a la función de inicialización
  init();
};

export default typeWriter; // Exporta la función para su uso en otros módulos