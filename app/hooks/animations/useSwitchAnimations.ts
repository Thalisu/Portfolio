import { useEffect, useRef } from "react";
import { SVGType } from "../../lib/types";
import { setSvgAnimation } from "@/app/lib/utils";

const useSvgAnimation = (
  seconds = 2,
  timing = "cubic-bezier(.39,.58,.57,1)",
  delay = 0
) => {
  const switchSvgRef = useRef<SVGType | null>(null);
  const cableSvgRef = useRef<SVGType | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (switchSvgRef.current && cableSvgRef.current && frameRef.current) {
      const switchChilds = Array.from(switchSvgRef.current.children);
      const switchSvg = switchSvgRef.current;
      const cableSvg = cableSvgRef.current;
      const frame = frameRef.current;

      switchChilds.map((child, i) => {
        setSvgAnimation(child, `drawIn 1s ${timing} forwards`);
        if (i === switchChilds.length - 1) {
          child.addEventListener(
            "animationend",
            () => {
              setTimeout(() => {
                frame.classList.remove("opacity-0");
                switchSvg.classList.add("opacity-0");
              }, 250);
              setSvgAnimation(
                cableSvg.children[0],
                `drawIn 0.5s ${timing} forwards`
              );
              cableSvg.classList.remove("opacity-0");
            },
            { once: true }
          );
        }
      });
    }
  }, [seconds, timing, delay]);

  return { switchSvgRef, cableSvgRef, frameRef };
};

export default useSvgAnimation;
