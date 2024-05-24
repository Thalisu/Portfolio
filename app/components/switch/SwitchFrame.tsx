"use client";

import { poppins } from "@/app/ui/fonts";
import { useRef } from "react";
import { CableDraw, SwitchDraw } from "@/app/components/svgs";
import useSvgAnimation from "@/app/hooks/useSvgAnimation";

export default function SwitchFrame() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const cableRef = useSvgAnimation(undefined, false, 0.25);
  const switchRef = useSvgAnimation(frameRef, true);

  return (
    <>
      <div
        ref={frameRef}
        className="w-full h-full border-4 border-primary flex flex-col items-center justify-center opacity-0 rounded rounded-bl-none transition-all"
      >
        <span
          className={`${poppins.className} uppercase font-bold text-primary`}
        >
          on
        </span>
        <div className="w-8 h-14 border-4 border-primary flex justify-center items-start cursor-pointer">
          <div className="my-0.5 w-5 h-5 border-4 border-primary"></div>
        </div>
        <span
          className={`${poppins.className} uppercase font-bold text-primary`}
        >
          off
        </span>
      </div>
      <CableDraw
        ref={cableRef}
        className="bottom-0 -left-[37px] absolute w-auto h-36 text-primary opacity-0"
      />
      <SwitchDraw
        ref={switchRef}
        className="absolute top-0 left-0 right-0 text-primary opacity-0"
      />
    </>
  );
}
