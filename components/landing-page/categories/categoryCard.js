import Image from "next/image";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";

const CategoryCard = ({ item }) => {
  return (
    <div className="drop-shadow-sm">
      <Link href={`/services/${item.id}`} className="group/category-banner">
        <div className={`grid gap-3`}>
          <ImageWithCustomSize
            className={`hover:scale-110 ${appTransitionClasses} object-top`}
            image={item?.image}
            alt={item?.label}
          />
          {item?.category ? (
            <div
              className={`text-gray-600 text-center cursor-pointer group-hover/category-banner:text-app-dark ${appTransitionClasses}`}
            >
              {item?.category}
            </div>
          ) : null}
          {item?.label ? (
            <div
              className={`md:text-lg text-app-theme font-semibold text-center cursor-pointer group-hover/category-banner:animate-fade-up ${appTransitionClasses}`}
            >
              {item?.label}
            </div>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
