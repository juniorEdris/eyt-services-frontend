"use client";

import { appTransitionClasses, cn } from "@/lib/utils";
import { Button } from "@/lib/twMaterialAssets";

const AppButton = ({
  variant = "outlined",
  className = "",
  label = "",
  Icon = null,
}) => {
  return (
    <Button
      variant={variant}
      className={cn(
        `rounded-lg bg-app-theme hover:bg-app-btn hover:opacity-75 text-white hover:text-white border-none font-Cairo ${appTransitionClasses}`,
        className,
      )}
    >
      {label}
      {Icon ? <Icon className="ml-2 h-4 w-4" /> : null}
    </Button>
  );
};

export default AppButton;
