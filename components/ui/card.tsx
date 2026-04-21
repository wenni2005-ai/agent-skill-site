import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_80px_-40px_rgba(6,182,212,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
