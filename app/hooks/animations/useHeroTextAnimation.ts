import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

import { SplitedElement } from "@/app/lib/types";

const useHeroTextAnimation = () => {
  const refTop = useRef<HTMLDivElement | null>(null);
  const refMiddle = useRef<HTMLDivElement | null>(null);
  const refBottom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!refTop.current || !refMiddle.current || !refBottom.current) return;

    const topNodes = Array.from(refTop.current.childNodes);
    const middleNodes = Array.from(refMiddle.current.childNodes);
    const bottomNodes = Array.from(refBottom.current.childNodes);

    const tl = gsap.timeline();

    const topText = getSplitText(topNodes);
    const middleText = getSplitText(middleNodes);
    const bottomText = getSplitText(bottomNodes);

    topTextAnimation(tl, topText);
    middleTextAnimation(tl, middleText);
    bottomTextAnimation(tl, bottomText);

    refTop.current.classList.remove("opacity-0");
    refMiddle.current.classList.remove("opacity-0");
    refBottom.current.classList.remove("opacity-0");
  }, []);

  const topTextAnimation = (tl: gsap.core.Timeline, topText: Node[]) => {
    tl.fromTo(
      topText,
      {
        y: -150,
      },
      {
        y: 0,
        stagger: 0.015,
        duration: 0.5,
      }
    )
      .to(topText[3], { rotateZ: 14, duration: 0.2 }, ">")
      .to(topText[3], { rotateZ: -8, duration: 0.2 }, ">")
      .to(topText[3], { rotateZ: 14, duration: 0.2 }, ">")
      .to(topText[3], { rotateZ: -4, duration: 0.2 }, ">")
      .to(topText[3], { rotateZ: 10, duration: 0.2 }, ">")
      .to(topText[3], { rotateZ: 0, duration: 0.2 }, ">");
  };

  const middleTextAnimation = (tl: gsap.core.Timeline, middleText: Node[]) => {
    tl.from(
      middleText,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.05,
      },
      "0.6"
    );
  };

  const bottomTextAnimation = (tl: gsap.core.Timeline, bottomText: Node[]) => {
    tl.from(
      bottomText,
      {
        y: 150,
        stagger: 0.015,
        duration: 0.4,
      },
      "0.8"
    )
      .to(
        bottomText[bottomText.length - 2],
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
        },
        "1"
      )
      .to(
        bottomText[bottomText.length - 1],
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
        },
        "1.2"
      );
  };

  const getSplitText = (nodes: ChildNode[]) => {
    let splitTitles: Node[] = [];
    nodes.map((node, i) => {
      if (node.textContent === "👋" || node.textContent === "") {
        splitTitles.push(node);
        return;
      }
      const newSplitTitle: SplitedElement = new SplitTextJS(node);
      splitTitles.push(...Array.from(newSplitTitle.chars));
    });
    return splitTitles;
  };

  return { refTop, refMiddle, refBottom };
};

export default useHeroTextAnimation;
