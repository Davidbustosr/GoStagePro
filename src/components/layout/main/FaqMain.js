import FaqPrimary from "@/components/sections/faq/FaqPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const FaqMain = () => {
  return (
    <main>
      <HeroInner title={"FAQ"} currentItem={"Preguntas Frecuentes"} />
      <FaqPrimary />
    </main>
  );
};

export default FaqMain;
