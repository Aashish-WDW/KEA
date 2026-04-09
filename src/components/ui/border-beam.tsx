import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = "#C9A84C",
  colorTo = "#E8D59E",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        borderWidth,
        borderStyle: "solid",
        borderColor: "transparent",
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        backgroundImage: `conic-gradient(from calc(var(--border-beam-angle, 0deg)), transparent, ${colorFrom}, ${colorTo}, transparent)`,
        animation: `border-beam-spin ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
      }}
    >
      <style>{`
@keyframes border-beam-spin {
  from { --border-beam-angle: 0deg; }
  to { --border-beam-angle: 360deg; }
}
@property --border-beam-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
      `}</style>
    </div>
  );
}
