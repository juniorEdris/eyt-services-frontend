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

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-7xl m-auto">
        {companyProducts?.map((item, _idx) => (
          <div key={_idx} className="cursor-pointer">
            <ImageWithCustomSize
              parentClassName=""
              image={item?.image}
              alt={item?.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyInfo;
