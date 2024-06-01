import Objective from "./Objective";
import SkillSection from "@/app/components/SkillSection";
import skills from "./skills";
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
        className="max-w-screen-xl w-full h-full px-4 relative rounded-[3px]"
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
