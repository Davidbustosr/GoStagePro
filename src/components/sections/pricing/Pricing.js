import PricingCard from "@/components/shared/cards/PricingCard";
import servcieBgImage3 from "@/assets/img/service/service__bg__3.png";

const Pricing = ({ plan, title, isDarkBg, isGrdient, tag, bg, isNotTag }) => {
  const plans = [
    [
      {
        id: 1,
        name: "PLAN INICIAL",
        price: "$20",
        business: "COMIENZA VIAJE MUSICAL",
        features: [
          "2 Faders para sonidos",
          "2 opciones-Piano",
          "1 opción-Pad",
          "1 opción-Synth",
          "Soporte técnico 24/7",
        ],
        link: "/products/1",
      },
      {
        id: 2,
        name: "PLAN BASICO",
        price: "$30",
        business: "MEJORA CONTROL MUSICAL",
        features: [
          "4 Faders para sonidos",
          "3 opciones-Piano",
          "2 opción-Pad",
          "2 opción-Synth",
          "Soporte técnico 24/7",
        ],
        link: "/products/2",
      },
      {
        id: 3,
        name: "PLAN INTERMEDIO",
        price: "$50",
        business: "STAGE AL SIGUIENTE NIVEL",
        features: [
          "6 Faders para sonidos",
          "5 opcione-Piano",
          "3 opción-Pad ",
          "3 opción-Synth",
          "2 opciones-Violín",
          "Soporte técnico 24/7",
        ],
        link: "/products/3",
      },
      {
        id: 4,
        name: "PLAN PRO",
        price: "$60",
        business: "LA EXPERIENCIA COMPLETA",
        features: [
          "8 Faders-control total.",
          "5 opciones-Piano",
          "2 opciones-Rhodes",
          "5 opción-Pad ",
          "5 opción-Synth",
          "2 opciones-Violín",
          "2 opciones-Trompeta",
          "Soporte técnico 24/7",
        ],
        isSpecial: true,
        link: "/products/4",
      },
    ],
  ];

  return (
    <div
      className="pricing sp_top_120 sp_bottom_120 special__spacing"
      style={{
        background:
          bg === "white"
            ? ""
            : `${isDarkBg ? "var(--blackBlue)" : "var(--pinkcolor)"} url('${
                servcieBgImage3.src
              }')`,
      }}
      id="tb__pricing"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title ${
                isDarkBg ? "section__title--3 sp_bottom_70" : "sp_bottom_50"
              } text-center  `}
            >
              {isNotTag ? (
                ""
              ) : (
                <div
                  className={`${
                    plan === 2
                      ? "section__title__button"
                      : "section__title__small"
                  } `}
                >
                  <span className={`${isGrdient ? "text__gradient" : ""}`}>
                    {tag ? tag : "PRECIOS & PLANES"}
                  </span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {title ? title : "Elige el Plan Perfecto para Tu Música"}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content tab__content__wrapper" id="myTabContent">
          {plans?.map((plan, idx) => (
            <div
              key={idx}
              className={`tab-pane fade ${idx === 0 ? "active show" : ""}`}
              id={`projects__${idx === 0 ? "one" : "two"}`}
              role="tabpanel"
              aria-labelledby={`projects__${idx === 0 ? "one" : "two"}`}
            >
              <div className="social__wrapper">
                <div className="row">
                  {plan?.map((planSingle, idx1) => (
                    <PricingCard key={idx1} plan={planSingle} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;