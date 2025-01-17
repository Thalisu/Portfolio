import projects from "@/app/lib/projects";
import { Pos } from "@/app/lib/types";
import Project from "@/app/ui/works/Project";
import { useTranslations } from "next-intl";

export default function Works() {
  const t = useTranslations("works");
  return (
    <main className="relative flex w-full flex-col items-center gap-6 py-24">
      {projects.map((_, i) => (
        <Project
          name={t(`project-${i}.name`)}
          src={t(`project-${i}.src`)}
          age={t(`project-${i}.age`)}
          desc={t(`project-${i}.desc`)}
          href={t(`project-${i}.href`)}
          img={t(`project-${i}.img`)}
          techs={t(`project-${i}.techs`).split(",")}
          type={t(`project-${i}.type`)}
          feats={t(`project-${i}.feats`)?.split(",")}
          key={crypto.randomUUID()}
          pos={i % 2 === 0 ? Pos.right : Pos.left}
        ></Project>
      ))}
    </main>
  );
}
