"use client";
import MiddleText from "./headers/MiddleText";
import TopText from "./headers/TopText";
import BottomText from "./headers/BottomText";
import useHeroPageAnimations from "./animations";

import { ArrowDown, CircularScrollTexts } from "@/app/components/svgs";

export default function HeroSection() {
  const { ref } = useHeroPageAnimations();

  return (
    <div
      className="relative flex h-svh w-full flex-col items-center justify-between"
      ref={ref}
    >
      <div className="relative flex h-fit w-fit grow flex-col justify-center gap-12 opacity-0">
        <TopText />
        <MiddleText />
        <BottomText />
      </div>
      <div className="relative bottom-0 left-0 right-0 mb-2 mt-auto h-32 w-full">
        <div className="">
          <ArrowDown className="absolute bottom-0 left-0 right-0 top-0 m-auto flex min-h-3 w-3 text-primary opacity-0" />
          <ArrowDown className="absolute bottom-0 left-0 right-0 top-0 m-auto min-h-3 w-3 text-primary opacity-0" />
        </div>
        <CircularScrollTexts className="m-auto w-32 text-primary opacity-0" />
      </div>
    </div>
  );
}
