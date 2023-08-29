import { LandingPageHeadings } from "@/components/primary/app-headings";
import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";

const LandingBanner = () => {
  return (
    <section className="py-12" id="landing-banner">
      <Container>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="grid place-items-center">
            <ImageWithCustomSize
              parentClassName="h-[745px]"
              className=""
              image="/images/landing-page/banner-section/Esportslogo.jpg"
              alt="landing-banner"
            />
          </div>
          <div className="grid place-items-center">
            <LandingPageHeadings heading="Banner Desc" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingBanner;
