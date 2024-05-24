import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";

const useSquareRollAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [splitTitle, setSplitTitle] = useState<SplitedElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const newSplitTitle = new SplitTextJS(ref.current.childNodes[0]);
    ref.current.children[0].classList.remove("opacity-0");
    gsap.from(newSplitTitle.chars, {
      opacity: 0,
      y: -80,
      rotateX: 90,
      stagger: 0.1,
      duration: 0.5,
    });
    setSplitTitle(newSplitTitle);
  }, []);

  const changeTitle = () => {
    if (ref.current && splitTitle) {
      gsap.to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.02,
      });
    }
  };

  return { ref, changeTitle };
};

export default useSquareRollAnimation;
