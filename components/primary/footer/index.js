import Container from "@/components/primary/container";
import { AppLogo } from "@/lib/custom-svg";
import { Typography } from "@/lib/twMaterialAssets";
import {
  Dribbble,
  Headphones,
  Instagram,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import { appTransitionClasses } from "@/lib/utils";
import Link from "next/link";

const AppFooter = () => {
  const iconClassName = `p-3 rounded-full hover:bg-app-theme hover:text-app-light ${appTransitionClasses}`;
  return (
    <section className="py-12" id="footer">
      <Container>
        <div className="grid gap-3 md:gap-0 md:grid-cols-4 md:content-center md:justify-items-center">
          <div className={`flex items-center md:justify-center`}>
            <AppLogo />
          </div>

          <div className={`grid gap-1 content-start`}>
            <div className={``}>
              <Headphones className="" />
            </div>
            <Typography
              variant="paragraph"
              className="font-Cairo font-normal text-app-theme"
            >
              Got questions?
            </Typography>
            <Typography
              variant="paragraph"
              className="font-Cairo text-app-dark font-normal"
            >
              +88 01800000000
            </Typography>
          </div>

          <div className={`grid gap-1 content-start`}>
            <div className={``}>
              <MapPin className="" />
            </div>
            <div className={``}>
              <Typography
                variant="paragraph"
                className="font-Cairo font-normal text-app-theme"
              >
                Contact info
              </Typography>
            </div>

            <div className={``}>
              <Typography
                variant="small"
                className="font-Cairo text-gray-600 font-normal"
              >
                335 (6th Floor) Yahya Tower, Lalkhan Bazar, Chattogram,
                Bangladesh
              </Typography>
            </div>
          </div>

          <div
            className={`flex flex-wrap gap-1 items-center md:justify-center`}
          >
            <Link
              href={`https://www.twitter.com`}
              target="_blank"
              className={`${iconClassName}`}
            >
              <Twitter className={`h-6 w-6`} />
            </Link>
            <Link
              href={`https://www.youtube.com`}
              target="_blank"
              className={`${iconClassName}`}
            >
              <Youtube className={`h-6 w-6`} />
            </Link>
            <Link
              href={`https://www.instagram.com`}
              target="_blank"
              className={`${iconClassName}`}
            >
              <Instagram className={`h-6 w-6`} />
            </Link>
            <Link
              href={`https://www.dribble.com`}
              target="_blank"
              className={`${iconClassName}`}
            >
              <Dribbble className={`h-6 w-6`} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppFooter;
