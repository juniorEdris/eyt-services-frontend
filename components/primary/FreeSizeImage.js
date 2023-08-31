import Image from "next/image";
import { cn } from "@/lib/utils";

const ImageWithCustomSize = ({
  image = "",
  alt = "",
  className = "",
  parentClassName = "",
}) => {
  return (
    <div
      className={cn("relative h-56 w-full overflow-hidden", parentClassName)}
    >
      <Image
        src={image}
        className={cn("w-full object-cover", className)}
        fill={true}
        priority={false}
        alt={alt}
      />
    </div>
  );
};

export default ImageWithCustomSize;
