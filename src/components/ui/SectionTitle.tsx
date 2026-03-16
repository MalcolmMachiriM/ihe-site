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
    <div className={`mb-10 text-center sm:mb-12 md:mb-16 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
