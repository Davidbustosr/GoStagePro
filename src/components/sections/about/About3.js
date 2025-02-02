import Image from "next/image";
import aboutImage4 from "@/assets/img/about/about__4.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const About3 = ({ type }) => {
  return (
    <div
      className={`about ${
        type === 2 ? "" : "about__grident__bg "
      } about__white__bg position-relative sp_bottom_120 sp_top_160`}
      id="about__mission__area"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__inner about__inner--2">
              <div
                className={`section__title  section__title--2 ${
                  type === 2 ? "" : "section__title--3 "
                }`}
              >
                <div className="section__title__button">
                  <span className={type === 2 ? `text__gradient` : ""}>
                    Sobre Nosotros
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    COMPROMETIDOS CON TU EXITO: EXPERIENCIA Y DEDICACION A TU SERVICIO
                  </h3>
                </div>
              </div>

              <div
                className={`about__vision__wrapper ${
                  type === 2 ? "sp_top_60" : "about__vision__wrapper--3"
                }`}
              >
                <div className="about__number">
                  <div
                    className={`about__number__inner ${
                      type === 2 ? "bg__primary" : " "
                    }`}
                  >
                    <span></span>
                    <p>Comenzar Ahora</p>
                    <div className="about__number__icon">
                      <Link href="/blogs">
                        {" "}
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.9902 23.0107L22.8908 11.1101"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="about__text__wrapper">
                  <div className="about__misson">
                    <h6>Nuestra Misión & Visión</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                    “En Go Stage Pro, creemos que la música es un {" "}
                      <Link href="/about">
                      regalo de Dios,
                      </Link>{" "}
                      una herramienta poderosa para inspirar, conectar y adorar. Nuestra misión es equipar a músicos como tú con las herramientas necesarias para llevar EL mensaje al mundo de la manera más auténtica y profesional posible. Nos esforzamos por simplificar el proceso técnico, permitiéndote centrarte en lo que realmente importa.”
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text="VER PLANES"
                      path="/blogs"
                      button={type === 2 ? "" : "white"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="about__img__3" data-tilt>
              <Image src={aboutImage4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
