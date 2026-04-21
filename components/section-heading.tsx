export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
