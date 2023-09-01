import { cn } from "@/lib/utils";
import { Typography } from "@/lib/twMaterialAssets";

const DescriptionTexts = ({
  parentClassName = "",
  titleClassName = "",
  title = "",
  className = "",
  subtitle = "",
}) => {
  return (
    <div className={cn(``, parentClassName)}>
      {title ? (
        <h1
          className={cn(
            `text-xl md:text-3xl text-gray-700 mb-3`,
            titleClassName,
          )}
        >
          {title}
        </h1>
      ) : null}
      {subtitle ? (
        <Typography
          variant="paragraph"
          className={cn(`font-Cairo font-medium text-gray-600`, className)}
        >
          {subtitle}
        </Typography>
      ) : null}
    </div>
  );
};

export default DescriptionTexts;
