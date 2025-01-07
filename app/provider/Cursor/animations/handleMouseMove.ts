import { MouseEvents } from "@/app/lib/types";
import gsap from "gsap";

const handleMouseMove = (
  e: MouseEvents,
  cursorSize: number,
  stagger = 0.003,
  duration = 0.1,
) => {
  let clientX = 0;
  let clientY = 0;
  if ("clientX" in e && "clientY" in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  } else if ("touches" in e) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  gsap.to("#circle", {
    x: clientX - cursorSize / 2,
    y: clientY - cursorSize / 2,
    stagger,
    duration,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export default handleMouseMove;
