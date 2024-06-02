"use client";

import Buttons from "./Buttons";
import ProjectsList from "./ProjectsList";
import MaskEffect from "@/app/components/MaskEffect";
import useMaskTurbulenceAnimation from "@/app/animations/works/maskTurbulence";

export default function Projects() {
  const ref = useMaskTurbulenceAnimation();

  return (
    <div
      className="flex flex-col w-svw max-w-screen-md gap-6 bg-primary border-transparent rounded-lg p-6 relative z-30 maskbg pointer-events-none"
      ref={ref}
    >
      <MaskEffect />
      <ProjectsList />
      <Buttons />
    </div>
  );
}
