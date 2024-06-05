import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const useProjectItemAnimation = () => {
  const ref = useRef<HTMLLIElement | null>(null);
  const [projectAnimation, setProjectAnimation] =
    useState<gsap.core.Timeline>();
  useGSAP(
    () => {
      if (!ref.current) return;
      const tl = gsap.timeline({ paused: true });
      const content = ref.current.childNodes[0];
      tl.to(
        content.childNodes[0],
        {
          top: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<",
      )
        .to(
          content.childNodes[1],
          {
            bottom: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "<",
        )
        .to(
          content.childNodes[2],
          {
            top: -40,
            bottom: -40,
            right: "33%",
            left: "33%",
            opacity: 1,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "<",
        );
      setProjectAnimation(tl);
    },
    { scope: ref },
  );
  return { ref, projectAnimation };
};

export default useProjectItemAnimation;
