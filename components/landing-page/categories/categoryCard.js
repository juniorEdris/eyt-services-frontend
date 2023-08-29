import Image from "next/image";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";

const CategoryCard = ({ item }) => {
  return (
    <div className="drop-shadow-sm">
      <Link href={`/services/${item.id}`} className="group/category-banner">
        <div className="grid gap-3">
          <ImageWithCustomSize
            className="object-top"
            image={item?.image}
            alt={item?.label}
          />
          <div
            className={`md:text-lg text-app-theme font-medium text-center cursor-pointer group-hover/category-banner:animate-fade-up ${appTransitionClasses}`}
          >
            {item?.label}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
