import LandingHero from "@/components/landing-page/hero";
import CategorySection from "@/components/landing-page/categories";
import BestProducts from "@/components/landing-page/bestProducts";
import LandingBanner from "@/components/landing-page/bannerSection";
import Brands from "@/components/landing-page/brandsection";
import OurProducts from "@/components/landing-page/ourProducts";
import CompanyInfo from "@/components/landing-page/companyInfo";

function Home() {
  return (
    <main className="">
      <LandingHero />
      <CategorySection />
      <BestProducts />
      <LandingBanner />
      <Brands />
      <OurProducts />
      <CompanyInfo />
    </main>
  );
}
export default Home;
