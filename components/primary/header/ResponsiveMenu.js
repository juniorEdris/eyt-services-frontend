import { X } from "lucide-react";
import Link from "next/link";
import { pageRoutes } from "@/lib/utils/uiData";
import { appTransitionClasses } from "@/lib/utils";
import { AppLogo } from "@/lib/custom-svg";

const ResponsiveMenu = ({ active, onClose }) => {
  return (
    <>
      <div
        className={`fixed ${
          !active ? "top-[-500%]" : "top-0"
        } left-0 bg-app-theme w-full shadow-inner z-20 sm:hidden
          py-5 px-3 drop-shadow-md ${appTransitionClasses}
          `}
      >
        <div className="text-right">
          <span
            className={`md:hidden bg-app-dark hover:bg-app-gray text-app-light hover:bg-opacity-75 p-2 rounded-md ${appTransitionClasses} z-30`}
          >
            <X
              role="button"
              tabIndex={0}
              className="h-6 w-6 inline-block focus:outline-none"
              onClick={onClose}
            />
          </span>
        </div>

        <div className="py-5">
          <ul className="grid gap-2">
            <li>
              <AppLogo className="flex items-center justify-center" />
            </li>
            {pageRoutes?.map((item, _idx) => (
              <li key={_idx} className="">
                <Link
                  href={item?.path}
                  className={`text-app-light hover:text-app-dark hover:bg-gray-50 block rounded-sm p-1 capitalize ${appTransitionClasses}`}
                >
                  {item?.label}
                </Link>
              </li>
            ))}

            {/* <li>
              <WaitListBtn
                label={"Join waitlist"}
                className="w-full"
                Icon={ArrowRight}
              />
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
