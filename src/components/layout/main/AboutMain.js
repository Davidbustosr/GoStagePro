import About3 from "@/components/sections/about/About3";
import Team3 from "@/components/sections/team/Team3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AboutWrapper from "@/components/shared/wrappers/AboutWrapper";
import CounterUp from "@/components/sections/counter-up/CounterUp";

const AboutMain = () => {
  return (
    <main>
      <HeroInner title={"Sobre nosotros"} currentItem={"Sobre nosotros"} />
      <AboutWrapper>
        <About3 type={2} />
        <Team3 type={2} label="Nuestro equipo" />
      </AboutWrapper>

      <CounterUp />

      <Testimonials3 type={2} />

    </main>
  );
};

export default AboutMain;
