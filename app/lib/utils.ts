import SplitTextJS from "split-text-js";
import { gsap } from "gsap";

import { SplitedElement } from "@/app/lib/types";

export const setSvgAnimation = (
  path: Element,
  animation: string,
  property?: string
) => {
  if (path instanceof SVGPathElement) {
    const totalLength = path.getTotalLength().toString();

    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;
    property && path.style.setProperty(`--${property}`, totalLength);
    path.style.animation = animation;

    return totalLength;
  } else {
    console.log("not a SVGPathElement");
  }
};

export const getSplitText = (nodes: ChildNode[]) => {
  let splitTitles: Node[] = [];
  nodes.map((node, i) => {
    if (node.textContent === "👋" || node.textContent === "") {
      splitTitles.push(node);
      return;
    }
    const newSplitTitle: SplitedElement = new SplitTextJS(node);
    splitTitles.push(...Array.from(newSplitTitle.chars));
  });
  return splitTitles;
};

export const animateCursor = (
  animations: gsap.QuickToFunc[],
  child: string,
  duration: number,
  ease: string,
  stagger: number
) => {
  return animations
    .concat(
      gsap.quickTo(child, "x", {
        duration,
        ease,
      })
    )
    .concat(
      gsap.quickTo(child, "y", {
        duration,
        ease,
      })
    );
};
