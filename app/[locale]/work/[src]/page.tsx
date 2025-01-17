import Description from "@/app/ui/works/Description";
import projects from "@/app/lib/projects";
import Project from "@/app/ui/works/Project";
import Feats from "@/app/ui/works/Feats";
import { useTranslations } from "next-intl";

interface IParams {
  src: string;
}

export default function Work({ params }: { params: IParams }) {
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
  const work = projectsObj.find((project) => params.src === project.src);
  if (!work) return null;
  return (
    <main className="relative box-border flex w-full flex-col items-center gap-8 pt-24">
      <Project {...work} />
      <Description desc={work.desc} age={work.age} techs={work.techs} />
      {work.feats && <Feats feats={work.feats} />}
    </main>
  );
}
