"use client";

import { useState } from "react";
import Buttons from "./Buttons";
import ProjectsList from "./ProjectsList";
import MaskEffect from "@/app/components/MaskEffect";

export default function Projects() {
  const [isMainOnes, setIsMainOnes] = useState(true);

  return (
    <div className="flex flex-col w-svw max-w-screen-md gap-6 bg-primary border-transparent rounded-lg p-6 relative z-30 maskbg">
      <MaskEffect />
      <Buttons />
      <ProjectsList />
    </div>
  );
}
