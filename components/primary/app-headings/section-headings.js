import { cn } from "@/lib/utils";

export const LandingPageHeadings = ({
  Icon = null,
  heading = "",
  subheading = "",
  iconClassName = "",
  headingClassName = "",
  subheadingClassName = "",
}) => {
  return (
    <div className="grid gap-4 mb-8 md:mb-16">
      {Icon ? (
        <div className="text-center">
          <Icon className={cn(`inline-block h-6 w-6`, iconClassName)} />
        </div>
      ) : null}
      {heading ? (
        <h1
          className={cn(
            "text-2xl md:text-4xl text-center font-bold capitalize",
            headingClassName,
          )}
        >
          {heading}
        </h1>
      ) : null}
      {subheading ? (
        <p
          className={cn(
            "text-sm sm:text-base font-normal max-w-xl m-auto leading-relaxed tracking-widest capitalize",
            subheadingClassName,
          )}
        >
          {subheading}
        </p>
      ) : null}
    </div>
  );
};
