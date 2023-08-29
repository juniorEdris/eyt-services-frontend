import Image from "next/image";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";

const CategoryCard = ({ item }) => {
  return (
    <div className="drop-shadow-sm">
      <Link href={`/services/${item.id}`} className="group/category-banner">
        <div className="grid gap-3">
          <div className="relative h-56 w-full overflow-x-hidden">
            <Image
              src={item?.image}
              className="rounded-md w-full object-cover object-top"
              fill={true}
              priority={false}
              alt={item?.label}
              // objectFit="cover"
              // objectPosition="center"
            />
          </div>

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
