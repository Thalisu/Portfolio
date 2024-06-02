import { ProjectsButtonFilter as PropTypes } from "../lib/types";
import { poppins } from "../ui/fonts";

export default function ProjectsButtonFilter(props: PropTypes) {
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
    <button
      className="relative h-10 w-1/5 overflow-clip rounded border border-primary bg-primary px-4 py-2"
      onMouseEnter={() => handleMouseEnter(props.i)}
      onMouseLeave={() => handleMouseLeave(props.i)}
    >
      <div
        className="absolute -bottom-10 left-0 right-0 h-full bg-secondary"
        id={`buttonCover${props.i}`}
      ></div>
      <span
        className={`${poppins.className} absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center font-semibold text-secondary mix-blend-difference`}
        id={`buttonText${props.i}`}
      >
        {props.text}
      </span>
    </button>
  );
}
