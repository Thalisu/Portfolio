import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const useCallMeAnimations = () => {
  const ref = useRef(null);
  const [animations, setAnimations] = useState<gsap.core.Tween[]>();

  useGSAP(
    () => {
      const leftToRight = gsap.fromTo(
        ".under",
        {
          right: "100%",
        },
        {
          right: 0,
          left: 0,
          duration: 0.5,
          paused: true,
          ease: "power3.inOut",
        },
      );
      const rightToLeft = gsap.fromTo(
        ".under",
        {
          left: 0,
        },
        {
          left: "100%",
          right: 0,
          duration: 0.5,
          paused: true,
          ease: "power3.inOut",
        },
      );
      setAnimations([leftToRight, rightToLeft]);
    },
    { scope: ref },
  );

  return { ref, animations };
};
export default useCallMeAnimations;
