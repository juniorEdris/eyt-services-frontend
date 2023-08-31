import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings";
import { ourProducts } from "@/lib/utils/uiData";
import CategoryCard from "@/components/landing-page/categories/categoryCard";

const OurProducts = () => {
  return (
    <section className="py-12" id="our-products">
      <Container>
        <LandingPageHeadings
          heading="our products"
          subheading="all the best products for you"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5">
          {ourProducts?.map((item, _idx) => (
            <CategoryCard key={_idx} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
