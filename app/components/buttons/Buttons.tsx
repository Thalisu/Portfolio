import useButtonAnimation from "./animations/button";
import CreateButton from "./CreateButton";

export default function Buttons({
  text,
  to,
  className,
}: {
  text: string;
  to: string;
  className: string;
}) {
  const { ref, buttonAnimation } = useButtonAnimation();

  return (
    <div ref={ref}>
      <CreateButton
        text={text}
        i={0}
        buttonAnimation={buttonAnimation}
        to={to}
        className={className}
      />
    </div>
  );
}
