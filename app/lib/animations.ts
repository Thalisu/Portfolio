import gsap from "gsap";
import { QuickToElement } from "./types";
export const quickTo = (
  element: QuickToElement,
  type: "x" | "y",
  duration = 0.5,
  ease = "power3.out",
) => {
  return gsap.quickTo(element, type, {
    duration,
    ease,
    overwrite: "auto",
  });
};
