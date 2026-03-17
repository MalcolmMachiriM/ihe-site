import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-purple text-white shadow-md hover:bg-brand-purple-hover dark:bg-brand-purple dark:hover:bg-brand-purple-hover",
  secondary:
    "bg-brand-blue-muted/30 text-brand-purple hover:bg-brand-blue-muted/50 dark:bg-brand-purple/20 dark:text-brand-blue dark:hover:bg-brand-purple/30",
  outline:
    "border-2 border-brand-purple bg-transparent text-brand-purple hover:bg-brand-purple hover:text-white dark:border-brand-blue dark:text-brand-blue dark:hover:bg-brand-blue dark:hover:text-zinc-900",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:ring-offset-2 dark:focus:ring-brand-blue/40 dark:focus:ring-offset-zinc-900";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return <Link href={props.href} className={styles}>{children}</Link>;
  }

  const { href: _h, ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  );
}
