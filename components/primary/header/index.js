"use client";

import Container from "@/components/primary/container";
import { AppLogo } from "@/lib/custom-svg";
import Link from "next/link";
import { pageRoutes } from "@/lib/utils/uiData";
import AppButton from "@/components/primary/buttons/app-button";
import { useState } from "react";
import ResponsiveMenu from "@/components/primary/header/ResponsiveMenu";
import { Menu } from "lucide-react";
import { appTransitionClasses } from "@/lib/utils";

export const AppHeader = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenus = () => setActiveMenu((prev) => !prev);

  return (
    <section className="py-2 fixed top-0 left-0 w-full h-fit z-20 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <AppLogo className="text-app-light" />
          </div>

          <div className="hidden sm:block">
            <ul className="flex flex-row space-x-4 !font-bold uppercase tracking-wider list-none">
              {pageRoutes?.map((item, _idx) => (
                <li key={_idx}>
                  <Link
                    href={item?.path}
                    className={`hover:text-app-theme text-app-light ${appTransitionClasses}`}
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:flex sm:items-center sm:gap-x-4">
            <Link href="/">
              <AppButton className="font-normal" label={"Get Quote"} />
            </Link>
          </div>
          <div
            className={`sm:hidden hover:bg-app-gray p-2 rounded-full ${appTransitionClasses}`}
          >
            <Menu
              className="h-6 w-6 cursor-pointer text-app-light"
              onClick={toggleMenus}
              tabIndex={0}
              role="button"
            />
          </div>
        </div>
      </Container>
      <ResponsiveMenu active={activeMenu} onClose={toggleMenus} />
    </section>
  );
};
