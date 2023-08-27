import Container from "@/components/primary/container";
import { heroSlides } from "@/lib/utils/uiData";
import HeroSlider from "@/components/landing-page/hero/hero-slider";

const LandingHero = () => {
  return (
    <section className="" id="landing-hero">
      <div className="">
        <HeroSlider items={heroSlides} />
      </div>
    </section>
  );
};

export default LandingHero;
