"use client";

import { appTransitionClasses, cn } from "@/lib/utils";
import { Button } from "@/lib/twMaterialAssets";

const AppButton = ({
  variant = "outlined",
  className = "",
  label = "",
  Icon = null,
  // handleClick = () => {},
}) => {
  return (
    <Button
      variant={variant}
      className={cn(
        `rounded-lg bg-app-theme hover:bg-app-btn hover:opacity-75 text-app-light hover:text-app-dark border-none font-Cairo focus:ring-0 outline-none ${appTransitionClasses}`,
        className,
      )}
    >
      {label}
      {Icon ? <Icon className="ml-2 h-4 w-4" /> : null}
    </Button>
  );
};

export default AppButton;
