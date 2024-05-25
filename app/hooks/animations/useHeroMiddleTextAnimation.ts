import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";

const useHeroMiddleTextAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const frontend = ref.current.children[0];
    const newSplitTitle: SplitedElement = new SplitTextJS(frontend);

    frontend.classList.remove("opacity-0");

    gsap.from(newSplitTitle.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.05,
      delay: 0.4,
    });
  }, []);

  return ref;
};

export default useHeroMiddleTextAnimation;
