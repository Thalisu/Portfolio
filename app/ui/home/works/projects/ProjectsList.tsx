"use client";
import ProjectItem from "./ProjectItem";
import projects from "../../../../lib/projects";
import ProjectImageCarousel from "@/app/ui/home/works/projects/ProjectImageCarousel";
import useCarouselHandler from "./ProjectItem/useCarouselHandler";
import { useTranslations } from "next-intl";

export default function ProjectsList() {
  const { ref, handlers } = useCarouselHandler();
  const t = useTranslations("works");
  const projectsObj = projects.map((_, i) => {
    const feats = t(`project-${i}.feats`);
    return {
      name: t(`project-${i}.name`),
      src: t(`project-${i}.src`),
      age: t(`project-${i}.age`),
      desc: t(`project-${i}.desc`),
      href: t(`project-${i}.href`),
      img: t(`project-${i}.img`),
      techs: t(`project-${i}.techs`).split(","),
      type: t(`project-${i}.type`),
      feats: feats === "" ? undefined : feats.split(","),
    };
  });

  return (
    <ul className="h-96">
      {projectsObj.map((project, i) => (
        <ProjectItem
          index={i}
          isLast={i === projects.length - 1}
          {...project}
          key={crypto.randomUUID()}
          carousel={ref.current}
          handlers={handlers}
        />
      ))}
      <ProjectImageCarousel projects={projectsObj} ref={ref} />
    </ul>
  );
}
