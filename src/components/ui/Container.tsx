import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

const sizeMap = {
  narrow: "max-w-[920px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto ${sizeMap[size]} px-5 sm:px-8 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
