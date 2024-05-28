import { useEffect, useRef } from "react";
import gsap from "gsap";

import { getSplitText } from "@/app/lib/utils";

import {
  bottomTextAnimation,
  emojiAnimation,
  middleTextAnimation,
  topTextAnimation,
} from "./textAnimations";
import {
  arrowAnimation,
  rotatingTextAnimation,
} from "./rotatingScrollTextAnimation";

const useHeroPageAnimations = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const rScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !topRef.current ||
      !middleRef.current ||
      !bottomRef.current ||
      !rScrollRef.current
    )
      return;

    const topNodes = Array.from(topRef.current.childNodes);
    const middleNodes = Array.from(middleRef.current.childNodes);
    const bottomNodes = Array.from(bottomRef.current.childNodes);
    const rotatingScrollNodes = Array.from(rScrollRef.current.childNodes);

    const tl1 = gsap.timeline({
      onComplete: () => {
        const tl2 = gsap.timeline();
        rotatingTextAnimation(tl2, rotatingScrollNodes[1]);
        arrowAnimation(tl2, rotatingScrollNodes[0]);
      },
    });

    const topText = getSplitText(topNodes);
    const middleText = getSplitText(middleNodes);
    const bottomText = getSplitText(bottomNodes);

    topTextAnimation(tl1, topText);
    middleTextAnimation(tl1, middleText);
    bottomTextAnimation(tl1, bottomText);
    emojiAnimation(tl1, topText[3]);

    topRef.current.classList.remove("opacity-0");
    middleRef.current.classList.remove("opacity-0");
    bottomRef.current.classList.remove("opacity-0");
  }, []);

  return { topRef, middleRef, bottomRef, rScrollRef };
};

export default useHeroPageAnimations;
