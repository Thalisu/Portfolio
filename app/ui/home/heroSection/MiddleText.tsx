"use client";
import useSquareRollAnimation from "@/app/hooks/useToggleTitle";
import { poppins } from "@/app/ui/fonts";
import { useEffect } from "react";

export default function MiddleText() {
  const { ref, changeTitle } = useSquareRollAnimation();

  return (
    <div ref={ref}>
      <h2
        className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary leading-[0] opacity-0`}
      >
        frontend
      </h2>
      <h2
        className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary leading-[0] opacity-0`}
      >
        backend
      </h2>
    </div>
  );
}
