import Objective from "./Objective";
import SkillSection from "@/app/components/SkillSection";
import skills from "../../../lib/skills";
import RelativeToSelfContainer from "@/app/components/RelativeToSelfContainer";

export default function AboutMyWork() {
  const containerProps = {
    classNames:
      "w-full flex flex-col items-center gap-28 bg-secondary pt-[5%] boxShadow",
    additionalPx: 200,
  };
  return (
    <RelativeToSelfContainer {...containerProps}>
      <div
        className="relative h-full w-full max-w-screen-xl rounded-[3px] px-4"
        id="container"
      >
        <Objective />
        {skills.map((skill, i) => (
          <SkillSection {...skill} z={i} key={crypto.randomUUID()} />
        ))}
      </div>
    </RelativeToSelfContainer>
  );
}
