import useButtonAnimation from "../animations/button";
import ProjectsButtonFilter from "@/app/components/ProjectsButtonFilter";

export default function Buttons() {
  const { ref, buttonAnimation } = useButtonAnimation();

  return (
    <div className="flex justify-center gap-20" ref={ref}>
      <ProjectsButtonFilter
        text={"Ver mais"}
        i={0}
        buttonAnimation={buttonAnimation}
      />
    </div>
  );
}
