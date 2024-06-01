"use client";
import useMaskTurbulenceAnimation from "../animations/works/maskTurbulence";
import { CircularMask } from "./svgs";

export default function MaskEffect() {
  const ref = useMaskTurbulenceAnimation();
  return (
    <CircularMask className="absolute w-full h-full bg-transparent" ref={ref} />
  );
}
