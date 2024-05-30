import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { getSplitText } from "@/app/lib/utils";

const useSkillSectionAnimation = (z: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const container = ref.current as HTMLDivElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "-200px 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.from(container, {
        x: z % 2 === 0 ? 200 : -200,
        y: 100,
      });
    },
    { scope: ref }
  );

  return ref;
};
export default useSkillSectionAnimation;
