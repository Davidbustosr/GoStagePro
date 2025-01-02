// Importación de imágenes utilizadas en los proyectos
import projectImage2 from "@/assets/img/project/project__2.png";
import projectImage3 from "@/assets/img/project/project__3.png";
import projectImage4 from "@/assets/img/project/project__4.png";
import projectImage5 from "@/assets/img/project/project__5.png";
import projectImage6 from "@/assets/img/project/project__6.png";
import projectImage7 from "@/assets/img/project/project__7.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";

// Función para obtener una lista de proyectos con sus detalles
const getAllProjects = () => {
  // Array de objetos que representa la información de cada proyecto
  const projects = [
    {
      id: 1, // Identificador único del proyecto
      title: "Business Process Optimization", // Título del proyecto
      img: projectImage2, // Imagen principal del proyecto
      detailsImg: projectImage11, // Imagen de detalles del proyecto
      duration: "1500", // Duración del proyecto (posiblemente en milisegundos)
    },
    {
      id: 2,
      title: "Market Research and Analysis",
      img: projectImage3,
      detailsImg: projectImage12,
      duration: "1800",
    },
    {
      id: 3,
      title: "Risk Assessment and Management",
      img: projectImage4,
      detailsImg: projectImage13,
      duration: "2100",
    },
    {
      id: 4,
      title: "Business Process Optimization",
      img: projectImage5,
      detailsImg: projectImage14,
      duration: "2400",
    },
    {
      id: 5,
      title: "Market Research and Analysis",
      img: projectImage6,
      detailsImg: projectImage15,
      duration: "2600",
    },
    {
      id: 6,
      title: "Risk Assessment and Management",
      img: projectImage7,
      detailsImg: projectImage13,
      duration: "2800",
    },
    {
      id: 7,
      title: "Risk Assessment and Management",
      img: projectImage4,
      detailsImg: projectImage12,
      duration: "2100",
    },
    {
      id: 8,
      title: "Market Research and Analysis",
      img: projectImage3,
      detailsImg: projectImage15,
      duration: "1800",
    },
    {
      id: 9,
      title: "Business Process Optimization",
      img: projectImage2,
      detailsImg: projectImage12,
      duration: "1500",
    },
    {
      id: 10,
      title: "Market Research and Analysis",
      img: projectImage3,
      detailsImg: projectImage13,
      duration: "1800",
    },
    {
      id: 11,
      title: "Risk Assessment and Management",
      img: projectImage4,
      detailsImg: projectImage15,
      duration: "2100",
    },
    {
      id: 12,
      title: "Business Process Optimization",
      img: projectImage2,
      detailsImg: projectImage11,
      duration: "1500",
    },
  ];
  return projects; // Retorna el array de proyectos
};

export default getAllProjects; // Exporta la función para que pueda ser utilizada en otros módulos