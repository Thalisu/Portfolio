import useButtonAnimation from "../animations/button";
import CreateButton from "./CreateButton";

export default function Buttons() {
  const { ref, buttonAnimation } = useButtonAnimation();

  return (
    <div className="flex justify-center gap-20" ref={ref}>
      <CreateButton
        text={"Ver mais"}
        i={0}
        buttonAnimation={buttonAnimation}
        to="/works"
      />
    </div>
  );
}
