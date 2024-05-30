import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { getSplitText } from "@/app/lib/utils";

const useWorksHeaderAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const header = getSplitText([ref.current as HTMLDivElement]);

      gsap.from(header, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top+=150px 80%",
          end: "top 30%",
          scrub: true,
          markers: true,
        },
        y: 100,
        opacity: 0,
        rotateX: 90,
        stagger: 0.02,
      });
    },
    { scope: ref }
  );
  return ref;
};

export default useWorksHeaderAnimation;
