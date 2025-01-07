import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { addClassList, removeClassList } from "@/app/lib/utils";

const useMaskTurbulenceAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.config({
        ignoreMobileResize: true,
      });
      gsap.from(".mask", {
        scrollTrigger: {
          trigger: ref.current,
          start: "center-=100 center+=100",
          end: "center-=100 center-=100",
          scrub: true,
          onUpdate: (self) => {
            self.progress >= 0.4
              ? removeClassList(["pointer-events-none"], [ref.current])
              : addClassList(["pointer-events-none"], [ref.current]);
            self.progress >= 0.9
              ? removeClassList(["maskbg"], [ref.current])
              : addClassList(["maskbg"], [ref.current]);
          },
        },
        r: 0,
      });
    },
    { scope: ref },
  );
  return ref;
};

export default useMaskTurbulenceAnimation;
