import Objective from "./Objective";
import SkillSection from "@/app/components/SkillSection";
import skills from "../../../lib/skills";

export default function AboutMyWork() {
  return (
    <div
      className="relative h-full w-full max-w-screen-xl rounded-[3px] px-4"
      id="container"
    >
      <Objective />
      {skills.map((skill, i) => (
        <SkillSection {...skill} z={i} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
