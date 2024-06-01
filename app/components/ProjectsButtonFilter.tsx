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
      className="py-2 px-4 rounded border border-primary relative overflow-clip w-1/5 h-10 bg-primary"
      onMouseEnter={() => handleMouseEnter(props.i)}
      onMouseLeave={() => handleMouseLeave(props.i)}
    >
      <div
        className="absolute right-0 left-0 h-full bg-secondary -bottom-10"
        id={`buttonCover${props.i}`}
      ></div>
      <span
        className={`${poppins.className} font-semibold absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center text-secondary mix-blend-difference`}
        id={`buttonText${props.i}`}
      >
        {props.text}
      </span>
    </button>
  );
}
