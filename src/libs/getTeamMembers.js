// Importación de imágenes de los miembros del equipo desde el directorio de activos
import teamImage1 from "@/assets/img/team/team_1.png";
import teamImage2 from "@/assets/img/team/team_2.png";
import teamImage3 from "@/assets/img/team/team_3.png";
import teamImage4 from "@/assets/img/team/team_4.png";
import teamImage5 from "@/assets/img/team/team_5.png";
import teamImage6 from "@/assets/img/team/team_6.png";
import teamImage7 from "@/assets/img/team/team_7.png";
import teamImage8 from "@/assets/img/team/team_8.png";
import teamImage9 from "@/assets/img/team/team_9.png";
import teamImage10 from "@/assets/img/team/team_10.png";
import teamImage11 from "@/assets/img/team/team_11.png";
import teamImage12 from "@/assets/img/team/team_12.png";
import teamImage13 from "@/assets/img/team/team_13.png";
import teamImage14 from "@/assets/img/team/team_14.png";
import teamImage15 from "@/assets/img/team/team_15.png";
import teamImage16 from "@/assets/img/team/team_16.png";
import teamImage17 from "@/assets/img/team/team_17.png";

// Función para obtener los datos de los miembros del equipo
const getTeamMembers = () => {
  // Definición de un arreglo de objetos que representan a los miembros del equipo
  const team = [
    {
      id: 1, // Identificador único del miembro
      name: "VNDIES GRIFFITH", // Nombre del miembro
      img: teamImage15, // Imagen del miembro
      desig: "Founder & CEO", // Puesto o designación
      duration: "1500", // Tiempo asociado (puede ser para animaciones u otros efectos)
    },
    {
      id: 2,
      name: "MINIEDS GINDIE",
      img: teamImage16,
      desig: "Founder & COO",
      duration: "1700",
    },
    // Más objetos que representan a otros miembros del equipo...
    {
      id: 27,
      name: "SABRINA TUCKER",
      img: teamImage14,
      desig: "Project Manager",
      duration: "2500",
    },
  ];

  // Retorna la lista de miembros del equipo
  return team;
};

// Exporta la función para que pueda ser utilizada en otros módulos
export default getTeamMembers;