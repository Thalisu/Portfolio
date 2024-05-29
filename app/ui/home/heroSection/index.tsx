"use client";
import MiddleText from "./headers/MiddleText";
import TopText from "./headers/TopText";
import BottomText from "./headers/BottomText";
import useHeroPageAnimations from "@/app/animations/heroPage";

import { ArrowDown, CircularScrollTexts } from "@/app/components/svgs";

export default function HeroSection() {
  const { ref } = useHeroPageAnimations();

  return (
    <div
      className="flex flex-col w-svw h-svh items-center justify-center relative"
      ref={ref}
    >
      <div className="w-fit h-fit flex flex-col gap-12 relative opacity-0">
        <TopText />
        <MiddleText />
        <BottomText />
      </div>
      <div className="absolute bottom-0 right-0 left-0 h-1/6">
        <div>
          <ArrowDown className="w-3 min-h-3 flex absolute top-0 bottom-0 right-0 left-0 m-auto text-primary opacity-0" />
          <ArrowDown className="w-3 min-h-3 absolute top-0 bottom-0 right-0 left-0 m-auto text-primary opacity-0" />
        </div>
        <CircularScrollTexts className="w-32 absolute top-0 bottom-0 right-0 left-0 m-auto text-primary opacity-0" />
      </div>
    </div>
  );
}
