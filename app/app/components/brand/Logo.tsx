import { Zap } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-navy-950">
        <Zap className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold tracking-wide">THE WATT</span>
        <span className="block text-[11px] text-teal-300">Sales Intelligence</span>
      </span>
    </div>
  );
}
