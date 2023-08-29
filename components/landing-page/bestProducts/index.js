import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings";
import AppTabs from "@/components/primary/buttons/app-tabs";
import { bestProductsTabs } from "@/lib/utils/uiData";
import { Award } from "lucide-react";

const BestProducts = () => {
  return (
    <section className="py-12" id="best-products">
      <Container>
        <LandingPageHeadings
          Icon={Award}
          iconClassName="text-gray-500"
          heading="best selling products"
          subheading="We Provide best services all over the world"
        />

        <div className="">
          <AppTabs items={bestProductsTabs} />
        </div>
      </Container>
    </section>
  );
};

export default BestProducts;
