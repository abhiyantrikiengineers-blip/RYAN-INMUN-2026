import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "border-b border-line bg-navy px-4 py-14 text-cream md:py-20",
        className,
      )}
    >
      <div className="site-container">
        {eyebrow && (
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-navy-muted md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
