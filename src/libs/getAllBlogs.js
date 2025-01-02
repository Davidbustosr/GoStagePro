// Importa las imágenes que se usarán en los blogs desde la carpeta de activos (assets).
import blogImage1 from "@/assets/img/blog/blog__1.png";
import blogImage2 from "@/assets/img/blog/blog__2.png";
import blogImage3 from "@/assets/img/blog/blog__3.png";
import blogImage4 from "@/assets/img/blog/blog__4.png";
import blogImage5 from "@/assets/img/blog/blog__5.png";
import blogImage6 from "@/assets/img/blog/blog__6.png";
import blogImage7 from "@/assets/img/blog/blog__7.png";

// Define la función que retorna todos los blogs disponibles.
const getAllBlogs = () => {
  // Array de objetos que representa cada blog con su información.
  const blogs = [
    // Planes (del 1 al 4)
    {
      id: 1, // Identificador único
      title: "Plan Inicial", // Título del blog
      img: blogImage1, // Imagen asociada al blog
      desc: "Perfecto para empezar. Incluye herramientas básicas para exploración y aprendizaje. Para más información y ver un demo, haz clic en el botón.", // Descripción
      tag: "Planes", // Etiqueta para clasificar el blog
      category: "Planes", // Categoría a la que pertenece
      duration: "1500",
      audioUrl: "/audios/piano-1.mp3"
    },
    {
      id: 2,
      title: "Plan Basico",
      img: blogImage1,
      desc: "Ideal para usuarios intermedios. Incluye configuraciones esenciales para personalización. Para más información y ver un demo, haz clic en el botón.",
      tag: "Planes",
      category: "Planes",
      duration: "1800",
      audioUrl: "/audios/piano-1.mp3"
    },
    {
      id: 3,
      title: "Plan Intermedio",
      img: blogImage1,
      desc: "Para quienes buscan más opciones. Incluye sonidos adicionales y acceso a plantillas personalizables. Para más información y ver un demo, haz clic en el botón.",
      tag: "Planes",
      category: "Planes",
      duration: "2100",
      audioUrl: "/audios/piano-1.mp3"
    },
    {
      id: 4,
      title: "Plan Pro",
      img: blogImage1,
      desc: "La mejor experiencia para profesionales. Acceso completo a todas las herramientas y funcionalidades. Para más información y ver un demo, haz clic en el botón.",
      tag: "Planes",
      category: "Planes",
      duration: "2100",
      audioUrl: "/audios/piano-1.mp3"
    },

    // Instrumentos con audioURL agregado (del 5 al 25)
    // Pianos
    {
      id: 5,
      title: "Piano-1",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Piano",
      category: "Piano",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 6,
      title: "Piano-2",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Piano",
      category: "Piano",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 7,
      title: "Piano-3",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Piano",
      category: "Piano",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 8,
      title: "Piano-4",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Piano",
      category: "Piano",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 9,
      title: "Piano-5",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Piano",
      category: "Piano",
      audioUrl: "/audios/piano-1.mp3",
    },
    // Pads
    {
      id: 10,
      title: "Pad-1",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Pad",
      category: "Pad",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 11,
      title: "Pad-2",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Pad",
      category: "Pad",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 12,
      title: "Pad-3",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Pad",
      category: "Pad",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 13,
      title: "Pad-4",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Pad",
      category: "Pad",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 14,
      title: "Pad-5",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Pad",
      category: "Pad",
      audioUrl: "/audios/piano-1.mp3",
    },
    // Synths
    {
      id: 15,
      title: "Synth-1",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Synth",
      category: "Synth",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 16,
      title: "Synth-2",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Synth",
      category: "Synth",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 17,
      title: "Synth-3",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Synth",
      category: "Synth",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 18,
      title: "Synth-4",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Synth",
      category: "Synth",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 19,
      title: "Synth-5",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Synth",
      category: "Synth",
      audioUrl: "/audios/piano-1.mp3",
    },
    // Violins
    {
      id: 20,
      title: "Violin-1",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Violin",
      category: "Violin",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 21,
      title: "Violin-2",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Violin",
      category: "Violin",
      audioUrl: "/audios/piano-1.mp3",
    },
    // Trumpets
    {
      id: 22,
      title: "Trompeta-1",
      img: blogImage6,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Trompeta",
      category: "Trompeta",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 23,
      title: "Trompeta-2",
      img: blogImage6,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Trompeta",
      category: "Trompeta",
      audioUrl: "/audios/piano-1.mp3",
    },
    // Rhodes
    {
      id: 24,
      title: "Rhodes-1",
      img: blogImage7,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Rhodes",
      category: "Rhodes",
      audioUrl: "/audios/piano-1.mp3",
    },
    {
      id: 25,
      title: "Rhodes-2",
      img: blogImage7,
      desc: "Lorem ipsum dolor sit amet...",
      tag: "Rhodes",
      category: "Rhodes",
      audioUrl: "/audios/piano-1.mp3",
    },
  ];

  return blogs; // Retorna la lista de blogs.
};

export default getAllBlogs; // Exporta la función para ser utilizada en otros componentes.