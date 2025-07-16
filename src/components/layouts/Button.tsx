import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  size = "medium",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}) => {
  const sizeClassNames = {
    small: "text-xm !px-2 !py-1",
    medium: "text-sm !px-5 !py-3",
    large: "text-lg !px-8 !py-4",
  };
  return (
    <button
      className={twMerge(
        " bg-secondary  !text-primary rounded-full",
        className,
        sizeClassNames[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
