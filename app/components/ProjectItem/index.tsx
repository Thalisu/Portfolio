import useProjectItemAnimation from "@/app/ui/home/animations/works/projectItem";
import { Project } from "../../lib/types";
import { inter } from "../../ui/fonts";
import ClickableContainer from "../ClickableContainer";

export default function ProjectItem({
  isLast,
  carousel,
  ...project
}: {
  carousel: HTMLLIElement | null;
  isLast: boolean;
} & Project) {
  const { ref, projectAnimation } = useProjectItemAnimation();

  const handleMouseEnter = () => {
    projectAnimation?.isActive()
      ? projectAnimation?.play()
      : projectAnimation?.play(0);
  };
  const handleMouseLeave = () => {
    projectAnimation?.reverse();
  };

  return (
    <li
      className={`${isLast ? "border-y-[1px]" : "border-t-[1px]"} border-spacing`}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ClickableContainer
        className="relative flex h-full w-full cursor-none justify-between px-4 py-4"
        href={project.href}
        scale={4}
        center={false}
        animate={false}
      >
        <div className="absolute bottom-1/2 left-0 right-0 bg-[#393632] opacity-25"></div>
        <div className="absolute left-0 right-0 top-1/2 bg-[#393632] opacity-25"></div>
        <span className={`${inter.className} font-bold text-primary`}>
          {project.name}
        </span>
        <span className={`${inter.className} font-medium text-primary`}>
          {project.type} - {project.age}
        </span>
      </ClickableContainer>
    </li>
  );
}