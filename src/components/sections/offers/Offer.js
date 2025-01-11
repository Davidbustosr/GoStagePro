import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import financeImage1 from "@/assets/img/about/about__finance.png";

const Offer = ({ title, desc, label, img, offer, id }) => {
  return (
    <div
      className="about ext-about position-relative sp_bottom_140 sp_top_140"
      id={id}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={img ? img : financeImage1}
                alt="about__finance"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_20">
                <div className="section__title__button">
                  <span className="text__gradient">
                    {label ? label : ""}
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    {title
                      ? title
                      : "Beneficios de Elegir GO STAGE PRO"}
                  </h3>
                </div>
              </div>
              <p className="sp_bottom_10">
                {desc
                  ? desc
                  : "En GO STAGE PRO, empoderamos a músicos y líderes de adoración con herramientas diseñadas para facilitar la planificación, configuración y ejecución de conciertos en vivo. Nuestro enfoque se basa en la excelencia, la accesibilidad y el soporte técnico dedicado."}
              </p>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>Configuración fácil y rápida para conciertos en vivo.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Planes diseñados para músicos de todos los niveles.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Soporte técnico 24/7 para cualquier escenario.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Sonidos personalizados para un sonido unico.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Herramientas intuitivas para planificar y organizar los conciertos.
                  </li>
                </ul>
              </div>
              <div className="about__vision__wrapper">
                <div className="about__button">
                  <ButtonPrimary
                    text="COMENZAR AHORA"
                    path="/shop"
                    button={"black"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
