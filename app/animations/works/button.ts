import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const useButtonAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [buttonAnimation, setButtonAnimation] = useState<gsap.core.Tween[]>();
  useGSAP(
    () => {
      if (!ref.current) return;

      const duration = 0.5;
      const bottom = 0;
      const animations = Array.from(ref.current.childNodes).map((node, i) => {
        const animation_1 = gsap.fromTo(
          `#buttonCover${i}`,
          {
            bottom,
          },
          {
            bottom: 40,
            paused: true,
            duration: duration / 2,
          }
        );
        const animation_0 = gsap.fromTo(
          `#buttonCover${i}`,
          {
            bottom: -40,
          },
          {
            bottom,
            paused: true,
            duration,
          }
        );
        return [animation_0, animation_1];
      });

      setButtonAnimation(animations.flat());
    },
    { scope: ref }
  );
  return { ref, buttonAnimation };
};

export default useButtonAnimation;
