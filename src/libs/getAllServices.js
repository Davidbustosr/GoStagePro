// Importación de imágenes utilizadas en los servicios
import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";

// Función para obtener una lista de servicios con sus detalles
const getAllServices = () => {
  // Definición de un array de objetos, donde cada objeto representa un servicio
  const services = [
    {
      id: 1, // Identificador único del servicio
      title: "Planificación de Conciertos", // Título del servicio
      desc: "Organiza tus conciertos con herramientas simples y eficientes. Desde canciones hasta transiciones, todo listo para el momento perfecto.", // Descripción del servicio
      detailsImg: projectImage15, // Imagen utilizada para mostrar detalles del servicio
      img: serviceImage6, // Imagen principal del servicio
      category: "Strategic Planning", // Categoría del servicio
      duration: "1500", // Duración asociada al servicio (puede representar tiempo o alguna métrica)
    },
    {
      id: 2,
      title: "PROBANDO",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Cost Reduction Analysis",
      duration: "1700",
    },
    // ... más objetos de servicios definidos con el mismo formato
    {
      id: 21, // Último servicio
      title: "GROWTH STRATEGIES", // Título del servicio
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", // Descripción breve
      detailsImg: projectImage15, // Imagen de detalle asociada
      img: serviceImage12, // Imagen principal del servicio
      category: "Cost Reduction Analysis", // Categoría del servicio
      duration: "2100", // Duración en alguna métrica (posiblemente milisegundos)
    },
  ];

  // Retorna la lista completa de servicios
  return services;
};

// Exporta la función para que pueda ser utilizada en otros módulos
export default getAllServices;