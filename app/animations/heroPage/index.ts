import { useLayoutEffect, useRef } from "react";

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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const useHeroPageAnimations = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const textContainer = container.current?.childNodes[0] as HTMLDivElement;

      const topNodes = Array.from(textContainer.childNodes[0].childNodes);
      const middleNodes = Array.from(textContainer.childNodes[1].childNodes);
      const bottomNodes = Array.from(textContainer.childNodes[2].childNodes);

      const rotatingContainer = container.current?.childNodes[1] as ChildNode;
      const rotatingScrollNodes = Array.from(rotatingContainer.childNodes);
      console.log(rotatingContainer.childNodes);

      const splitTopText = getSplitText(topNodes);
      const splitMiddleText = getSplitText(middleNodes);
      const splitBottomText = getSplitText(bottomNodes);

      const ttl = gsap.timeline({ paused: true });

      topTextAnimation(ttl, splitTopText);
      middleTextAnimation(ttl, splitMiddleText);
      bottomTextAnimation(ttl, splitBottomText);
      emojiAnimation(ttl, splitTopText[3]);

      textContainer.classList.remove("opacity-0");
      ttl.play();

      const rtl = gsap.timeline();

      const delayToStart = 1.2;
      arrowAnimation(rtl, rotatingScrollNodes[0], delayToStart);
      rotatingTextAnimation(rtl, rotatingScrollNodes[1], delayToStart);

      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          rtl.play();
        }
      });

      gsap.registerPlugin(ScrollTrigger);

      const stl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top",
          end: "+=400px",
          scrub: true,
          onEnter: () => {
            rtl.pause();
          },
        },
      });

      stl.to(container.current, {
        y: -180,
        opacity: 0,
        rotateX: -15,
      });
    },
    { scope: container }
  );

  return { ref: container };
};

export default useHeroPageAnimations;
