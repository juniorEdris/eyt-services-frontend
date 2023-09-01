import { LandingPageHeadings } from "@/components/primary/app-headings";
import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";
import { companyProducts } from "@/lib/utils/uiData";
import { appTransitionClasses } from "@/lib/utils";
import { Youtube } from "lucide-react";
import Link from "next/link";
import DescriptionTexts from "@/components/landing-page/companyInfo/descriptionTexts";

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

          <div className="grid gap-4">
            <DescriptionTexts
              subtitle={`Graphic design has become an increasingly important part of modern business. It is essential for businesses to have access to high-quality graphic design materials to ensure their presence in the marketplace. Finding the right graphic design agency can be a daunting task, however, this article will provide an overview of the best graphic design services available. This article will look at what makes a good graphic design service, how to find one, and some of the best agencies available.`}
            />

            <DescriptionTexts
              title="Graphic Design Agency"
              subtitle="Welcome to our article all about the best graphic design services that a graphic design agency can offer! Graphic design is an essential part of successful branding, marketing, and communication campaigns. It's integral to making your products, services, and ideas look attractive, professional, and unique. Whether you're a start-up business or a long-established company looking for some help with your visual identity, it pays to find the right graphic design agency for your needs."
            />

            <DescriptionTexts
              title="What is a Graphic Design Agency?"
              subtitle="Welcome to Graphic Design Agency, the premier provider of graphic design services. With over a decade of experience and a team of highly skilled professionals, our mission is to help you create eye-catching graphics that will help your business stand out from the crowd. Whether you are looking for logos, brochures, posters, or other graphic designs, we offer high-quality services at competitive prices."
            />

            <DescriptionTexts
              title="Types of Services Offered"
              subtitle="Graphic design is an important and vital part of the success of any business. It can help to engage customers, create a unique identity, and build trust in the brand. A graphic design agency is an effective way to ensure that your marketing campaigns are successful and engaging. With the right graphic design services, you'll be able to create a powerful brand image that will resonate with your audience."
            />

            <DescriptionTexts
              title="Benefits of Graphic Design Services"
              subtitle="The Graphic Design Agency is a leading provider of high-quality graphic design services. With over 10 years of experience, we are dedicated to providing clients with innovative, creative solutions that meet their needs and exceed their expectations. Our team specializes in creating unique and memorable visual experiences for businesses of all sizes. We bring together experienced professionals from the field of graphic design to create beautiful and impactful designs for our clients."
            />

            <DescriptionTexts
              title="Benefits of Graphic Design Services"
              subtitle="The Graphic Design Agency is a leading provider of high-quality graphic design services. With over 10 years of experience, we are dedicated to providing clients with innovative, creative solutions that meet their needs and exceed their expectations. Our team specializes in creating unique and memorable visual experiences for businesses of all sizes. We bring together experienced professionals from the field of graphic design to create beautiful and impactful designs for our clients."
            />

            <DescriptionTexts
              title="Cost of Professional Graphic Design Services"
              subtitle="Welcome to our article on the best graphic design services provided by a graphic design agency. Graphic design agencies specialize in creating high-quality visuals for businesses, organizations, and individuals. Their team of professionals has the skills necessary to create stunning designs that can help promote products, build brands, and tell stories. By employing the latest software and techniques, these agencies are able to quickly craft effective visual solutions that effectively communicate their clients' messages."
            />

            <DescriptionTexts
              title="Reasons to Hire a Professional Designer"
              subtitle="Graphic design is an important aspect of many businesses and organizations, as it communicates branding, messages, and ideas visually. An agency specializing in graphic design can be a valuable asset when attempting to create eye-catching designs that will stand out from the competition. The right graphic design agency can help a business achieve its marketing goals while creating attractive visuals that attract customers. In this article, we will be exploring the best graphic design services available from a reliable graphic design agency."
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CompanyInfo;
