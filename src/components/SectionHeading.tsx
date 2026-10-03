export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl leading-none tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}
