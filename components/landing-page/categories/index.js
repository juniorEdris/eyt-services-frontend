import CategoryCard from "@/components/landing-page/categories/categoryCard";
import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings";

const CategorySection = () => {
  return (
    <section className="py-12" id="services">
      <Container>
        <LandingPageHeadings heading="our services" />
        <div className="grid sm:grid-cols-3 gap-5">
          <CategoryCard
            item={{
              id: 0,
              category: "Company Profile Design",
              label: "",
              image: "/images/landing-page/category/company_file.jpg",
            }}
          />
          <CategoryCard
            item={{
              id: 1,
              category: "Packaging Design",
              label: "",
              image: "/images/landing-page/category/packaging-design.jpg",
            }}
          />

          <CategoryCard
            item={{
              id: 0,
              category: "T-Shirt Design",
              label: "",
              image: "/images/landing-page/category/tshirt-design.jpg",
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
