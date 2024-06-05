"use client";
import ProjectItem from "./ProjectItem";
import projects from "../../../../lib/projects";
import ProjectImageCarousel from "@/app/ui/home/works/projects/ProjectImageCarousel";
import useCarouselHandler from "./ProjectItem/useCarouselHandler";

export default function ProjectsList() {
  const { ref, handlers } = useCarouselHandler();

  return (
    <ul className="h-96">
      {projects.map((project, i) => (
        <ProjectItem
          index={i}
          isLast={i === projects.length - 1}
          {...project}
          key={crypto.randomUUID()}
          carousel={ref.current}
          handlers={handlers}
        />
      ))}
      <ProjectImageCarousel projects={projects} ref={ref} />
    </ul>
  );
}
