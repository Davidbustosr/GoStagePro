import TeamCard2 from "@/components/shared/cards/TeamCard2"; // Importa el componente para mostrar tarjetas individuales del equipo
import getTeamMembers from "@/libs/getTeamMembers"; // Importa una función para obtener la lista de miembros del equipo

const Team3 = ({ type, label }) => {
  return (
    <div className="team__member__3 sp_top_140 sp_bottom_140 special__spacing">
      {/* Contenedor principal con padding superior e inferior */}
      <div className="container-fluid">
        <div className="row justify-content-center text-center"> {/* Centra el contenido horizontalmente */}
          {/* Columna con el título y la descripción de la sección */}
          <div
            className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500" // Animación AOS con duración de 1500ms
          >
            {/* Contenedor del título de la sección */}
            <div className="section__title section__title--2 text-center">
              {/* Título principal de la sección */}
              <div className="section__title__heading sp_bottom_20">
                <h3>Un equipo apasionado que transforma ideas en realidad</h3>
              </div>
              {/* Descripción del equipo */}
              <div className="section__title__text__3">
                <p>
                  “En Go Stage Pro, somos más que desarrolladores y técnicos; somos músicos, soñadores y creyentes apasionados por el poder transformador de la música. Cada miembro de nuestro equipo comparte una profunda fe en Dios y un compromiso con ayudar a otros a alcanzar su máximo potencial musical. Hemos diseñado esta plataforma pensando en ti, porque entendemos lo que significa liderar la adoración, emocionar a una audiencia o transmitir un mensaje profundo a través de un instrumento.
                </p>
                <p>
                  <strong>Nuestra visión compartida es clara:</strong> facilitarte el camino para que la excelencia musical sea accesible, sin complicaciones, permitiendo que tu propósito brille a través de cada melodía que toques. Nos sentimos honrados de caminar contigo en este viaje de creatividad, técnica y adoración.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team3; // Exporta el componente para que pueda ser usado en otras partes de la aplicación