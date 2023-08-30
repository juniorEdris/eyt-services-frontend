import BrandsSlider from "@/components/landing-page/brandsection/brandslider";
import { brandSlides } from "@/lib/utils/uiData";
import Container from "@/components/primary/container";

const Brands = () => {
  return (
    <section className="py-12" id="brands">
      <Container>
        <BrandsSlider items={brandSlides} />
      </Container>
    </section>
  );
};

export default Brands;
