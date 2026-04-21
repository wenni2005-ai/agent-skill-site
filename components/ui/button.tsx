import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition duration-200 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
        variant === "outline" && "border border-white/15 bg-white/5 text-white hover:bg-white/10 dark:text-white",
        variant === "ghost" && "text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
