import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";

const CategoryCard = ({ item }) => {
  return (
    <div
      className={`hover:shadow-app_shadow p-2 drop-shadow-sm ${appTransitionClasses}`}
    >
      <Link href={`/services/${item.id}`} className="group/category-banner">
        <div className={`grid gap-3`}>
          <ImageWithCustomSize
            parentClassName="rounded-none"
            className={`${appTransitionClasses} object-top rounded-none`}
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
              className={`md:text-lg text-app-theme font-semibold text-center cursor-pointer ${appTransitionClasses}`} // group-hover/category-banner:animate-fade-up
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
