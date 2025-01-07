import { MouseEvents } from "@/app/lib/types";
import gsap from "gsap";

const handleMouseMove = (
  e: MouseEvents,
  cursorSize: number,
  stagger = 0.003,
  duration = 0.1,
) => {

  gsap.to("#circle", {
    x: e.clientX - cursorSize / 2,
    y: e.clientY - cursorSize / 2,
    stagger,
    duration,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export default handleMouseMove;
