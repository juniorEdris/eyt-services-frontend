import Container from "@/components/primary/container";
import { heroSlides } from "@/lib/utils/uiData";
import HeroSlider from "@/components/landing-page/hero/hero-slider";

const LandingHero = () => {
  return (
    <section className="py-6" id="landing-hero">
      <h1 className="text-center text-2xl text-app-dark">Hero section</h1>
      <div className="py-4">
        <HeroSlider items={heroSlides} />
      </div>
    </section>
  );
};

export default LandingHero;
