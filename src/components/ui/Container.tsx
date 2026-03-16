import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
