import ProjectItem from "@/app/components/ProjectItem";
import projects from "../../../../lib/projects";

export default function ProjectsList() {
  return (
    <ul className="h-96">
      {projects.map((project, i) => (
        <ProjectItem
          isLast={i === projects.length - 1}
          {...project}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
}
