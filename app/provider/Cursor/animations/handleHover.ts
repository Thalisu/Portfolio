import { IsHovering } from "@/app/lib/types";
import gsap from "gsap";

const handleHover = (isHovering: IsHovering, cursorSize: number) => {
  gsap.to("#circle", {
    x: isHovering.center.x - cursorSize / 2,
    y: isHovering.center.y - cursorSize / 2,
    duration: 0.25,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export default handleHover
