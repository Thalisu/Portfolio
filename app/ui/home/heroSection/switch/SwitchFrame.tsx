"use client";

import { poppins } from "@/app/ui/fonts";
import { CableDraw, SwitchDraw } from "@/app/components/svgs";
import useSwitchAnimations from "@/app/hooks/animations/useSwitchAnimations";

export default function SwitchFrame() {
  const { switchSvgRef, cableSvgRef, frameRef } = useSwitchAnimations();

  return (
    <>
      <div
        ref={frameRef}
        className="w-full h-full border-4 border-primary flex flex-col items-center justify-center opacity-0 rounded-sm rounded-bl-none"
      >
        <span
          className={`${poppins.className} uppercase font-bold text-primary`}
        >
          on
        </span>
        <div className="w-8 h-14 border-4 border-primary flex justify-center items-start cursor-pointer rounded-sm">
          <div className="my-0.5 w-5 h-5 border-4 border-primary rounded-sm"></div>
        </div>
        <span
          className={`${poppins.className} uppercase font-bold text-primary`}
        >
          off
        </span>
      </div>
      <CableDraw
        ref={cableSvgRef}
        className="bottom-0 -left-[20px] absolute w-auto h-36 text-primary opacity-0"
      />
      <SwitchDraw
        ref={switchSvgRef}
        className="absolute top-0 bottom-0 left-0 right-0 text-primary"
      />
    </>
  );
}
