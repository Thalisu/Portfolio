import { poppins } from "@/app/ui/fonts";
import { CreateButton as PropTypes } from "@/app/lib/types";
import ClickableContainer from "../ClickableContainer";
import { DiagonalArrow } from "../svgs";

export default function CreateButton(props: PropTypes) {
  const handleMouseEnter = (i: number) => {
    const animation = i === 0 ? 0 : 2;
    if (props.buttonAnimation) {
      props.buttonAnimation[animation + 1].isActive()
        ? props.buttonAnimation[animation + 1].reverse()
        : props.buttonAnimation[animation].play(0);
    }
  };
  const handleMouseLeave = (i: number) => {
    const animation = i === 0 ? 0 : 2;
    if (props.buttonAnimation) {
      props.buttonAnimation[animation].isActive()
        ? props.buttonAnimation[animation].reverse()
        : props.buttonAnimation[animation + 1].play(0);
    }
  };

  return (
    <ClickableContainer
      className={`${props.className} relative flex overflow-hidden bg-primary`}
      href={props.to}
      scale={3}
    >
      <div
        className="pointer-events-none absolute -bottom-10 left-0 right-0 h-full bg-secondary"
        id={`buttonCover${props.i}`}
      ></div>
      <span
        className={`${poppins.className} absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center gap-1 text-secondary mix-blend-difference`}
        id={`buttonText${props.i}`}
        onMouseEnter={() => handleMouseEnter(props.i)}
        onMouseLeave={() => handleMouseLeave(props.i)}
      >
        {props.text}
        <DiagonalArrow className="flex h-2 w-2 content-center items-center justify-center text-secondary mix-blend-difference" />
      </span>
    </ClickableContainer>
  );
}
