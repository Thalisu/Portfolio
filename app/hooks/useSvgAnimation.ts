import { MutableRefObject, useEffect, useRef } from "react";
import { SVGType } from "../lib/types";

const showFrame = (frameRef: SVGType | HTMLDivElement) => {
  frameRef.classList.remove("opacity-0");
  /*   frameRef.style.animation = `fadeIn 0.5s cubic-bezier(1,0,0,1) forwards`; */
};

const useSvgAnimation = (
  frameRef?: MutableRefObject<HTMLDivElement | SVGType | null> | undefined,
  deconstruct = false,
  seconds = 1,
  timing = "cubic-bezier(.39,.58,.57,1)",
  delay = 0
) => {
  const ref = useRef<SVGType | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const path = ref.current.children[0];

    if (path instanceof SVGPathElement) {
      const totalLength = path.getTotalLength().toString();

      ref.current.style.strokeDasharray = totalLength;
      ref.current.style.strokeDashoffset = totalLength;
      ref.current.style.animation = `drawIn ${seconds}s ${timing} forwards`;
      ref.current.classList.remove("opacity-0");

      ref.current.addEventListener(
        "animationend",
        () => {
          if (frameRef?.current) showFrame(frameRef.current);
          if (deconstruct && ref.current) {
            ref.current.style.setProperty("--stroke-length", "-" + totalLength);
            ref.current.style.animation = `drawOut 0.25s ease-in forwards`;
          }
        },
        { once: true }
      );
    }
  }, [seconds, timing, delay, frameRef, deconstruct]);

  return ref;
};

export default useSvgAnimation;
