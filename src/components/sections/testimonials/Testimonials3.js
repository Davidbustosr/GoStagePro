"use client";
import TestimonialSlide from "@/components/shared/testimonials/TestimonialSlide";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialImage4 from "@/assets/img/testimonial/testimonial__13.png";
import testimonialImage5 from "@/assets/img/testimonial/testimonial__14.png";
import testimonialImage6 from "@/assets/img/testimonial/testimonial__11.png";
import testimonialImage7 from "@/assets/img/testimonial/testimonial__12.png";
import testimonialImage8 from "@/assets/img/testimonial/testimonial__10.png";
import testimonialImage9 from "@/assets/img/testimonial/testimonial__15.png";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialSlide3 from "@/components/shared/testimonials/TestimonialSlide3";
const Testimonials3 = ({ type, pb, pt }) => {
  const slides = [
    {
      id: 1,
      name: "José Ramírez",
      img: testimonialImage4,
      imgSmall: testimonialImage4,
      desig: "Pianista",
      desc: "“Antes, pasar horas configurando mis plantillas de MainStage era frustrante. Desde que uso Go Stage Pro, puedo personalizar mi setup en minutos y centrarme en lo que realmente importa: mi música. ¡Es como tener un técnico de sonido personal!”",
    },
    {
      id: 2,
      name: "Andrea López",
      img: testimonialImage5,
      imgSmall: testimonialImage5,
      desig: "Pianista",
      desc: "“Mis estudiantes siempre luchaban con configuraciones complejas. Ahora, con Go Stage Pro, pueden crear plantillas que suenan como si fueran de un profesional sin complicaciones. Ha revolucionado mis clases y sus prácticas.”",
    },
    {
      id: 3,
      name: "David Martínez",
      img: testimonialImage6,
      imgSmall: testimonialImage6,
      desig: "Pianista",
      desc: "“Trabajo con diferentes configuraciones cada semana, y Go Stage Pro me ha ahorrado horas de preparación. La capacidad de personalizar y tener un sonido profesional listo en minutos es un cambio total en mi carrera.”",
    },
    {
      id: 4,
      name: "Carolina Méndez",
      img: testimonialImage7,
      imgSmall: testimonialImage7,
      desig: "Pianista",
      desc: "“Go Stage Pro me permitió optimizar mi flujo de trabajo. Las plantillas personalizadas no solo suenan increíbles, sino que también se adaptan perfectamente a mis instrumentos virtuales. Una herramienta imprescindible para cualquier músico moderno.”",
    },
    {
      id: 5,
      name: "Laura González",
      img: testimonialImage8,
      imgSmall: testimonialImage8,
      desig: "Pianista",
      desc: "“Mi banda necesitaba una solución para que mis teclados sonaran más profesionales en vivo. Con Go Stage Pro, puedo ajustar cada detalle para adaptarlo a nuestro estilo y escenario. Ahora recibimos constantes elogios por nuestro sonido.”",
    },
    {
      id: 6,
      name: "Javier Ortiz",
      img: testimonialImage9,
      imgSmall: testimonialImage9,
      desig: "Pianista",
      desc: "“Go Stage Pro ha hecho que mi servicio semanal sea mucho más sencillo. Puedo configurar plantillas para diferentes canciones y estilos en minutos, manteniendo un sonido cálido y profesional que inspira confianza a toda la congregación.”",
    },
  ];
  return (
    <div
      className={` ${
        type === 2
          ? `testimonial ${pt ? pt : "sp_top_140"}  ${
              pb ? pb : "sp_bottom_140"
            }`
          : "testimonial__3 sp_top_140 sp_bottom_200"
      } `}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`${
                type === 2
                  ? "section__title  text-center"
                  : "section__title section__title--3 text-center"
              }  sp_bottom_60`}
            >
              <div className="section__title__button">
                <span className={type === 2 ? "text__gradient" : ""}>
                  Testimonios
                </span>
              </div>
              <div className="section__title__heading">
                <h3>
                  Lo que dicen nuestros <br />
                  clientes
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row position-relative"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Swiper
            className="testimonial__3__slider__active position-static"
            grabCursor={true}
            pagination={
              type === 1
                ? null
                : {
                    clickable: true,
                  }
            }
            navigation={true}
            slidesPerView={1}
            modules={type === 2 ? [Navigation] : [Navigation, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {slides?.map((slide, idx) => (
              <SwiperSlide
                className="testimonial__3__single__wraper  col-md-4"
                key={idx}
              >
                <TestimonialSlide3 slide={slide} type={type} />
              </SwiperSlide>
            ))}

            <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
              <div
                className={`swiper-button-next arrow-btn ${
                  type === 2 ? "arrow-btn-3" : "b"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`swiper-button-prev arrow-btn ${
                  type === 2 ? "arrow-btn-3" : "b"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 12H3.67"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
