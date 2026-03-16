interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 text-center md:mb-16 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
