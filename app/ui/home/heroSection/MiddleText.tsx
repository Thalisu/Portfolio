"use client";
import useHeroMiddleTextAnimation from "@/app/hooks/animations/useHeroMiddleTextAnimation";
import { poppins } from "@/app/ui/fonts";

export default function MiddleText() {
  const { ref } = useHeroMiddleTextAnimation();

  return (
    <div ref={ref}>
      <h2
        className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary leading-[0] opacity-0`}
      >
        frontend
      </h2>
      <h2
        className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary leading-[0] opacity-0 `}
      >
        backend
      </h2>
    </div>
  );
}
