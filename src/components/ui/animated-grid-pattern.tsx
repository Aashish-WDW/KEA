"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  className?: string;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  numSquares = 30,
  maxOpacity = 0.12,
  duration = 4,
  className,
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });
  const [activeSquares, setActiveSquares] = useState<number[]>([]);

  const getPos = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    const cols = Math.ceil(clientWidth / width);
    const rows = Math.ceil(clientHeight / height);
    setDimensions({ cols, rows });
  }, [width, height]);

  useEffect(() => {
    getPos();
    window.addEventListener("resize", getPos);
    return () => window.removeEventListener("resize", getPos);
  }, [getPos]);

  useEffect(() => {
    const total = dimensions.cols * dimensions.rows;
    if (total === 0) return;

    const pick = () => {
      const indices: number[] = [];
      for (let i = 0; i < numSquares; i++) {
        indices.push(Math.floor(Math.random() * total));
      }
      setActiveSquares(indices);
    };

    pick();
    const id = setInterval(pick, duration * 1000);
    return () => clearInterval(id);
  }, [dimensions, numSquares, duration]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width={width} height={height} patternUnits="userSpaceOnUse">
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[#C9A84C]/[0.06]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {activeSquares.map((idx, i) => {
          const col = idx % dimensions.cols;
          const row = Math.floor(idx / dimensions.cols);
          return (
            <rect
              key={`${idx}-${i}`}
              x={col * width + 1}
              y={row * height + 1}
              width={width - 2}
              height={height - 2}
              fill="currentColor"
              className="text-[#C9A84C]"
              style={{
                opacity: 0,
                animation: `grid-fade ${duration}s ease-in-out infinite`,
                animationDelay: `${(i / numSquares) * duration}s`,
              }}
            />
          );
        })}
      </svg>
      <style>{`
@keyframes grid-fade {
  0%, 100% { opacity: 0; }
  50% { opacity: ${maxOpacity}; }
}
      `}</style>
    </div>
  );
}
