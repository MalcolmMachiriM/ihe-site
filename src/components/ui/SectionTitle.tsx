import { type ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 sm:mb-16 ${alignment} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-blue-muted">
          <span className="h-px w-6 bg-brand-blue/60 dark:bg-brand-blue-muted/60" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
