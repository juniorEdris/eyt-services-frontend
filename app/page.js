import LandingHero from "@/components/landing-page/hero";
import CategorySection from "@/components/landing-page/categories";
import BestProducts from "@/components/landing-page/bestProducts";

function Home() {
  return (
    <main className="">
      <LandingHero />
      <CategorySection />
      <BestProducts />
    </main>
  );
}
export default Home;
