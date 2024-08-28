import projects from "../../lib/projects";
import Project from "../../ui/works/Project";

export default function Work({ params }: { params: { name: string } }) {
  const work = projects.find(
    (project) => params.name.replaceAll("%20", " ") === project.name,
  );
  if (!work) return null;
  return (
    <main className="relative flex ">
      <Project {...work}/>
    </main>
  );
}
