import { LandingPageHeadings } from "@/components/primary/app-headings";
import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";
import { companyProducts } from "@/lib/utils/uiData";
import { appTransitionClasses } from "@/lib/utils";
import { Typography } from "@/lib/twMaterialAssets";
import { Youtube } from "lucide-react";
import Link from "next/link";

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
          <Link key={_idx} href={`/`}>
            <div className="relative cursor-pointer group/company-item">
              <div
                className={`w-full h-full absolute top-0 left-0 text-app-light bg-app-dark bg-opacity-30 hidden group-hover/company-item:flex group-hover/company-item:z-20 items-center justify-center ${appTransitionClasses}`}
              >
                <Youtube
                  className={`h-6 w-6 ${appTransitionClasses} animate-jump-in animate-once animate-ease-linear animate-normal animate-fill-forwards`}
                />
              </div>
              <ImageWithCustomSize
                parentClassName="group-hover/company-item:z-10"
                image={item?.image}
                alt={item?.label}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="py-6">
        <Container>
          <LandingPageHeadings
            parentClassName="md:mb-8"
            headingClassName="text-left"
            heading="Graphic Design Agency | Best graphic design services"
          />

          <Typography
            variant="paragraph"
            className="font-Cairo font-medium text-gray-600"
          >
            Material Tailwind is an easy to use components library for Tailwind
            CSS and Material Design. It provides a simple way to customize your
            components, you can change the colors, fonts, breakpoints and
            everything you need.
          </Typography>
        </Container>
      </div>
    </section>
  );
};

export default CompanyInfo;
