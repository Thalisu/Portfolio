import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";
import { hasClasslistMethod } from "./typeGuards";

export const setSvgAnimation = (
  path: Element,
  animation: string,
  property?: string,
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

export const getCenter = (element: HTMLElement) => {
  const { top, left, width, height } = element.getBoundingClientRect();

  return { x: left + width / 2, y: top + height / 2 };
};

export const addClassList = (classList: string[], elements: unknown[]) => {
  if (elements.every((e) => hasClasslistMethod(e))) {
    classList.map((className) => {
      elements.map((e) => hasClasslistMethod(e) && e.classList.add(className));
    });
  }
};
export const removeClassList = (classList: string[], elements: unknown[]) => {
  if (elements.every((e) => hasClasslistMethod(e)))
    classList.map((className) => {
      elements.map(
        (e) => hasClasslistMethod(e) && e.classList.remove(className),
      );
    });
};
