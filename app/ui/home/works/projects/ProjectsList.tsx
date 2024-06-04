"use client";
import ProjectItem from "@/app/components/ProjectItem";
import projects from "../../../../lib/projects";
import ProjectImageCarousel from "@/app/components/ProjectImageCarousel";
import useCarouselHandler from "@/app/components/ProjectItem/useCarouselHandler";

export default function ProjectsList() {
  const { ref, handleMouseMove } = useCarouselHandler();

  return (
    <ul onMouseMove={(e) => handleMouseMove(e)} className="h-96">
      {projects.map((project, i) => (
        <ProjectItem
          isLast={i === projects.length - 1}
          {...project}
          key={crypto.randomUUID()}
          carousel={ref.current}
        />
      ))}
      <ProjectImageCarousel projects={projects} ref={ref} />
    </ul>
  );
}
