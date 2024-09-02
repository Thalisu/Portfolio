import Description from "@/app/ui/works/Description";
import projects from "../../lib/projects";
import Project from "../../ui/works/Project";
import Feats from "@/app/ui/works/Feats";

export default function Work({ params }: { params: { src: string } }) {
  const work = projects.find((project) => params.src === project.src);
  if (!work) return null;
  return (
    <main className="relative box-border flex w-svw flex-col items-center gap-8 pt-24">
      <Project {...work} />
      <Description desc={work.desc} age={work.age} techs={work.techs} />
      {work.feats && <Feats feats={work.feats} />}
    </main>
  );
}
