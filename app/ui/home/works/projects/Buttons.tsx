import useButtonAnimation from "@/app/animations/works/button";
import ProjectsButtonFilter from "@/app/components/ProjectsButtonFilter";

export default function Buttons() {
  const { ref, buttonAnimation } = useButtonAnimation();

  return (
    <div className="flex gap-20 justify-center" ref={ref}>
      <ProjectsButtonFilter
        text={"Principais"}
        i={0}
        buttonAnimation={buttonAnimation}
      />
      <ProjectsButtonFilter
        text={"Todos"}
        i={1}
        buttonAnimation={buttonAnimation}
      />
    </div>
  );
}
