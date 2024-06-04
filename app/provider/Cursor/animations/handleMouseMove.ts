import { MouseEvents } from "@/app/lib/types";
import gsap from "gsap";

const handleMouseMove = (e: MouseEvents, cursorSize: number) => {
  gsap.to("#circle", {
    x: e.clientX - cursorSize / 2,
    y: e.clientY - cursorSize / 2,
    stagger: 0.003,
    duration: 0.1,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export default handleMouseMove;
