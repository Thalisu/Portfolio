import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";

const useHeroTopTextAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const nodes = Array.from(ref.current.childNodes);
    const tl = gsap.timeline();

    let splitTitles: Node[] = [];
    nodes.map((node, i) => {
      if (i === 1) {
        splitTitles.push(node);
        return;
      }
      const newSplitTitle: SplitedElement = new SplitTextJS(node);
      splitTitles.push(...Array.from(newSplitTitle.chars));
    });
    ref.current.classList.remove("opacity-0");
    tl.fromTo(
      splitTitles,
      {
        y: -150,
      },
      {
        y: 0,
        stagger: 0.015,
        duration: 0.5,
      }
    )
      .to(nodes[1], { rotateZ: 14, duration: 0.2 })
      .to(nodes[1], { rotateZ: -8, duration: 0.2 })
      .to(nodes[1], { rotateZ: 14, duration: 0.2 })
      .to(nodes[1], { rotateZ: -4, duration: 0.2 })
      .to(nodes[1], { rotateZ: 10, duration: 0.2 })
      .to(nodes[1], { rotateZ: 0, duration: 0.2 });
  }, []);

  return ref;
};

export default useHeroTopTextAnimation;
