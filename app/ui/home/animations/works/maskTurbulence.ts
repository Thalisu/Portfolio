import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useMaskTurbulenceAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      const container = ref.current;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".mask", {
        scrollTrigger: {
          trigger: ref.current,
          start: "center-=100 center+=100",
          end: "center-=100 center-=100",
          scrub: true,
          onUpdate: (self) => {
            self.progress >= 0.7
              ? (container.style.pointerEvents = "auto")
              : (container.style.pointerEvents = "none");
          },
        },
        r: 0,
      });
    },
    { scope: ref }
  );
  return ref;
};

export default useMaskTurbulenceAnimation;
