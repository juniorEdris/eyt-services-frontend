import { LandingPageHeadings } from "@/components/primary/app-headings";
import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";
import { companyProducts } from "@/lib/utils/uiData";

const CompanyInfo = () => {
  return (
    <section className="py-12" id="company-info">
      <Container>
        <LandingPageHeadings
          heading="company branding"
          subheading="we do all branding works"
        />
      </Container>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 max-w-7xl m-auto">
        {ourProducts?.map((item, _idx) => (
          <ImageWithCustomSize
            key={_idx}
            parentClassName=""
            image={item?.image}
            alt={item?.label}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyInfo;
