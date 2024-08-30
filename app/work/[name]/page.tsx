import Description from "@/app/ui/works/Description";
import projects from "../../lib/projects";
import Project from "../../ui/works/Project";
import Feats from "@/app/ui/works/Feats";

export default function Work({ params }: { params: { name: string } }) {
  const work = projects.find(
    (project) => params.name.replaceAll("%20", " ") === project.name,
  );
  if (!work) return null;
  return (
    <main className="relative box-border flex w-svw flex-col items-center gap-8">
      <Project {...work} />
      <Description desc={work.desc} age={work.age} techs={work.techs} />
      {work.feats && <Feats feats={work.feats} />}
    </main>
  );
}
