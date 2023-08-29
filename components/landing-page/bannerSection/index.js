import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";
import AppButton from "@/components/primary/buttons/app-button";

const LandingBanner = () => {
  return (
    <section className="py-12" id="landing-banner">
      <Container>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="grid place-items-center">
            <ImageWithCustomSize
              parentClassName="h-[645px]"
              className=""
              image="/images/landing-page/banner-section/Esportslogo.jpg"
              alt="landing-banner"
            />
          </div>
          <div className="grid pt-12">
            <div className="flex flex-col gap-y-2.5 p-4">
              <h1 className="text-2xl md:text-4xl font-medium">
                Design amazing logo for
              </h1>
              <h1 className="text-xl md:text-4xl italic font-serif leading-tight">
                Gaming, Mascot, E-Sports, Discord & Twitch
              </h1>
              <p className="text-gray-600">
                Whether you&rsquo;re starting a new gaming channel or want to
                refresh your current brand, We create a professional, bold,
                unique logo design within 48 hours.
              </p>

              <div className="py-6">
                <AppButton
                  className="text-lg font-normal max-w-lg rounded-full drop-shadow-sm leading-relaxed"
                  label="Go to Link"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingBanner;
