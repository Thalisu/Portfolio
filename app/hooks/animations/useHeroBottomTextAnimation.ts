import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";

const useHeroBottomTextAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const developer = ref.current.childNodes[0];
    const github = ref.current.childNodes[1];
    const linkedin = ref.current.childNodes[2];

    const newSplitTitle: SplitedElement = new SplitTextJS(developer);
    ref.current.classList.remove("opacity-0");

    const tl = gsap.timeline();

    tl.from(newSplitTitle.chars, {
      y: 150,
      stagger: 0.015,
    })
      .to(
        github,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
        },
        "<0.3"
      )
      .to(
        linkedin,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
        },
        "<0.3"
      );
  }, []);

  return ref;
};

export default useHeroBottomTextAnimation;
