import LandingHero from "@/components/landing-page/hero";
import CategorySection from "@/components/landing-page/categories";
import BestProducts from "@/components/landing-page/bestProducts";
import LandingBanner from "@/components/landing-page/bannerSection";

function Home() {
  return (
    <main className="">
      <LandingHero />
      <CategorySection />
      <BestProducts />
      <LandingBanner />
    </main>
  );
}
export default Home;
