"use client";

/* import Buttons from "./Buttons"; */
import ProjectsList from "./ProjectsList";
import MaskEffect from "@/app/components/MaskEffect";
import useMaskTurbulenceAnimation from "../animations/maskTurbulence";

export default function Projects() {
  const ref = useMaskTurbulenceAnimation();

  return (
    <div
      className="maskbg pointer-events-none relative z-30 flex w-full max-w-screen-md flex-col gap-6 rounded-lg border-transparent bg-primary p-6"
      ref={ref}
    >
      <MaskEffect />
      <ProjectsList />
      {/* <Buttons /> */}
    </div>
  );
}
