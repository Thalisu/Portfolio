import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { getSplitText } from "@/app/lib/utils";
import Vivus from "vivus";

const useObjectiveAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const container = ref.current as HTMLDivElement;

      const svg = new Vivus("devSvg");
      svg.reset().stop();

      const h3 = getSplitText([container.childNodes[0]]);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          onUpdate: (self) =>
            self.isActive && svg.setFrameProgress(self.progress),
        },
      });

      tl.from(h3, {
        y: 80,
        stagger: 0.02,
      })
        .from("#p", {
          opacity: 0,
          rotateX: 45,
        })
        .from("#devSvg", {
          y: 20,
        })
        .to("#fillPath", {
          fill: "rgb(174 174 157)",
        });
    },
    { scope: ref }
  );

  return ref;
};
export default useObjectiveAnimation;
