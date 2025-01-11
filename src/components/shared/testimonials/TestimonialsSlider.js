"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsSlide2 from "./TestimonialsSlide2";
import testimonialSmallImage3 from "@/assets/img/testimonial/testimonial__small__img__3.png";
import testimonialImage3 from "@/assets/img/testimonial/testimonial__3.png";
import testimonialImage10 from "@/assets/img/testimonial/testimonial__10.png";
import testimonialImage11 from "@/assets/img/testimonial/testimonial__11.png";
import testimonialImage12 from "@/assets/img/testimonial/testimonial__12.png";
import testimonialImage13 from "@/assets/img/testimonial/testimonial__13.png";
import testimonialImage14 from "@/assets/img/testimonial/testimonial__14.png";
import { Navigation } from "swiper/modules";
const TestimonialsSlider = () => {
  const slides = [
    {
      id: 1,
      name: "José Ramírez",
      img: testimonialImage13,
      imgSmall: testimonialSmallImage3,
      desig: "Pianista",
      desc: "“Antes, pasar horas configurando mis plantillas de MainStage era frustrante. Desde que uso Go Stage Pro, puedo personalizar mi setup en minutos y centrarme en lo que realmente importa: mi música. ¡Es como tener un técnico de sonido personal!”",
    },
    {
      id: 2,
      name: "Andrea López",
      img: testimonialImage14,
      imgSmall: testimonialSmallImage3,
      desig: "Pianista",
      desc: "“Mis estudiantes siempre luchaban con configuraciones complejas. Ahora, con Go Stage Pro, pueden crear plantillas que suenan como si fueran de un profesional sin complicaciones. Ha revolucionado mis clases y sus prácticas.”",
    },
    {
      id: 3,
      name: "David Martínez",
      img: testimonialImage11,
      imgSmall: testimonialSmallImage3,
      desig: "Pianista",
      desc: "“Trabajo con diferentes configuraciones cada semana, y Go Stage Pro me ha ahorrado horas de preparación. La capacidad de personalizar y tener un sonido profesional listo en minutos es un cambio total en mi carrera.”",
    },
    {
      id: 4,
      name: "Carolina Méndez",
      img: testimonialImage12,
      imgSmall: testimonialSmallImage3,
      desig: "Pianista",
      desc: "“Go Stage Pro me permitió optimizar mi flujo de trabajo. Las plantillas personalizadas no solo suenan increíbles, sino que también se adaptan perfectamente a mis instrumentos virtuales. Una herramienta imprescindible para cualquier músico moderno.”",
    },
    {
      id: 5,
      name: "Laura González",
      img: testimonialImage10,
      imgSmall: testimonialSmallImage3,
      desig: "Pianista",
      desc: "“Mi banda necesitaba una solución para que mis teclados sonaran más profesionales en vivo. Con Go Stage Pro, puedo ajustar cada detalle para adaptarlo a nuestro estilo y escenario. Ahora recibimos constantes elogios por nuestro sonido.”",
    }
  ];
  return (
    <Swiper
      className="testimonial__slider__active__2 position-static"
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1,
        },

        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      }}
      wrapperClass="testimonial__2__wrap"
    >
      {slides?.map((testimonial, idx) => (
        <SwiperSlide className="col-md-3 testimonial__single__slider" key={idx}>
          <TestimonialsSlide2 slide={testimonial} />
        </SwiperSlide>
      ))}

      <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
        <div className="swiper-button-next arrow-btn arrow-btn-2">
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
        <div className="swiper-button-prev arrow-btn arrow-btn-2">
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
  );
};

export default TestimonialsSlider;
