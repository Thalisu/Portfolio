"use client";
import skills from "@/app/lib/skills";
import Objective from "./Objective";
import SkillSection from "@/app/ui/home/aboutMyWork/SkillSection";
import { useTranslations } from "next-intl";

export default function AboutMyWork() {
  const t = useTranslations("skills");

  return (
    <div
      className="relative h-full w-full max-w-screen-xl rounded-[3px] px-4"
      id="container"
    >
      <Objective />
      {skills.map((_, i: number) => (
        <SkillSection
          label={t(`skill-${i}.label`)}
          description={t(`skill-${i}.description`)}
          bulletPoints={t(`skill-${i}.bulletPoints`).split(",")}
          z={i}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
