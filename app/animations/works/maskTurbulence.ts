import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useMaskTurbulenceAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".mask", {
        scrollTrigger: {
          trigger: ref.current,
          start: "center-=100 center+=100",
          end: "center-=100 center-=100",
          scrub: true,
        },
        r: 0,
      });
    },
    { scope: ref }
  );
  return ref;
};

export default useMaskTurbulenceAnimation;
