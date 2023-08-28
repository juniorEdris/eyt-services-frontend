import CategoryCard from "@/components/landing-page/categories/categoryCard";
import Container from "@/components/primary/container";

const CategorySection = () => {
  return (
    <section className="py-12" id="services">
      <Container>
        <h1 className="text-2xl md:text-5xl text-center font-semibold capitalize mb-8 md:mb-16">
          Our Services
        </h1>
        <div className="grid sm:grid-cols-3 gap-5">
          <CategoryCard
            item={{
              id: 0,
              label: "Company Profile Design",
              image: "/images/landing-page/category/company_file.jpg",
            }}
          />
          <CategoryCard
            item={{
              id: 1,
              label: "Packaging Design",
              image: "/images/landing-page/category/packaging-design.jpg",
            }}
          />

          <CategoryCard
            item={{
              id: 0,
              label: "T-Shirt Design",
              image: "/images/landing-page/category/tshirt-design.jpg",
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
