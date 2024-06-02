import { poppins } from "../../../fonts";
import { GithubLogo, LinkedinLogo } from "@/app/components/svgs";
import { useContext, useRef } from "react";
import cursorContext from "@/app/context/cursor";
import { CursorContext } from "@/app/lib/types";

export default function BottomText() {
  const { setIsHoveringFunc } = useContext(cursorContext) as CursorContext;
  const github = useRef<HTMLAnchorElement>(null);
  const linkedin = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = (ref: HTMLAnchorElement | null) => {
    if (!ref) return;
    const { top, left, width, height } = ref.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    setIsHoveringFunc(true, center, 2);
  };
  const handleMouseLeave = () => {
    setIsHoveringFunc(false);
  };
  return (
    <div
      className="clip relative mt-3 flex h-fit w-full items-center gap-2"
      id="bottomText"
    >
      <h2
        className={`${poppins.className} w-max text-5xl font-bold uppercase leading-[35px] text-primary`}
      >
        developer
      </h2>
      <a
        href="https://github.com/Thalisu"
        className="svg ml-1 translate-y-7 cursor-none"
        target="_blank"
        ref={github}
        onMouseEnter={() => handleMouseEnter(github.current)}
        onMouseLeave={handleMouseLeave}
      >
        <GithubLogo className="w-5 text-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
        className="svg translate-y-7 cursor-none"
        target="_blank"
        ref={linkedin}
        onMouseEnter={() => handleMouseEnter(linkedin.current)}
        onMouseLeave={handleMouseLeave}
      >
        <LinkedinLogo className="w-5 text-primary" />
      </a>
    </div>
  );
}
