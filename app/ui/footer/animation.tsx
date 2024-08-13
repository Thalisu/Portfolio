import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface IAnimations {
  copyIconIn: gsap.core.Tween;
  baseOut: gsap.core.Tween;
  emailIn: gsap.core.Tween;
  emailOut: gsap.core.Tween;
  copyIn: gsap.core.Tween;
  doneIconIn: gsap.core.Tween;
}

const toRollOut = {
  y: -48,
  rotateX: 90,
  stagger: 0.02,
  ease: "power2.inOut",
  paused: true,
  duration: 0.5,
};

const toRollIn = {
  y: -24,
  rotateX: 0,
  stagger: 0.01,
  ease: "power2.inOut",
  duration: 0.4,

  paused: true,
};
const useEmailAnimations = () => {
  const container = useRef<HTMLButtonElement | null>(null);
  const [animations, setAnimations] = useState<IAnimations>();

  useGSAP(
    () => {
      const copyIconIn = gsap.fromTo(
        "#copyIcon",
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, paused: true, ease: "power3.out" },
      );
      const doneIconIn = gsap.fromTo(
        "#doneIcon",
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, paused: true, ease: "power3.in" },
      );

      const baseOut = gsap.fromTo("#base", { y: 0, rotateX: 0 }, toRollOut);

      const emailOut = gsap.fromTo("#email", { y: -24, rotateX: 0 }, toRollOut);
      const emailIn = gsap.fromTo("#email", { y: 0, rotateX: -90 }, toRollIn);

      const copyIn = gsap.fromTo(
        "#copied",
        { y: 24, rotateX: -90 },
        {
          y: 0,
          rotateX: 0,
          stagger: 0.01,
          ease: "power2.inOut",
          duration: 0.4,
          paused: true,
        },
      );

      setAnimations({
        copyIconIn,
        baseOut,
        emailIn,
        emailOut,
        copyIn,
        doneIconIn,
      });
    },
    { scope: container },
  );
  return { ref: container, animations };
};
export default useEmailAnimations;
