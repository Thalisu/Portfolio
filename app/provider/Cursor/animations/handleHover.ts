import { IsHovering } from "@/app/lib/types";
import gsap from "gsap";

const handleHover = (
  isHovering: IsHovering,
  cursorSize: number,
  childs: ChildNode[],
) => {
  gsap.to([childs[0], childs[1]], {
    x: isHovering.center.x - cursorSize / 2,
    y: isHovering.center.y - cursorSize / 2,
    duration: 0.25,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export default handleHover;
