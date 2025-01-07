"use client";
import { Copy, Done } from "@/app/components/svgs";
import { poppins } from "../fonts";
import useEmailAnimations from "./animation";
import { useRef } from "react";

export default function Gmail() {
  const { ref, animations } = useEmailAnimations();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const handleMouseEnter = () => {
    if (!animations || timeoutRef.current) return;
    animations.baseOut.play();
    animations.emailIn.play();
    animations.copyIconIn.play();
  };

  const handleMouseLeave = () => {
    if (!animations || timeoutRef.current) return;
    animations.baseOut.reverse();
    animations.emailIn.reverse();
    animations.copyIconIn.reverse();
  };

  const handleClick = () => {
    if (!animations || timeoutRef.current) return;
    animations.emailOut.play(0);
    animations.copyIn.play();
    animations.doneIconIn.play();
    animations.copyIconIn.reverse();
    (async () => {
      try {
        await navigator.clipboard.writeText("thalisondmcc@gmail.com");
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = undefined;
          animations.baseOut.reverse();
          animations.emailIn.pause(0);
          animations.doneIconIn.reverse();
          animations.copyIn.reverse();
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <button
      className={`${poppins.className} relative h-6 w-full cursor-none overflow-y-clip font-semibold text-secondary opacity-70`}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={ref}
    >
      <div className="baseText absolute bottom-0 left-0 h-full">
        <span className="inline-block" id="base">
          G
        </span>
        <span className="inline-block" id="base">
          m
        </span>
        <span className="inline-block" id="base">
          a
        </span>
        <span className="inline-block" id="base">
          i
        </span>
        <span className="inline-block" id="base">
          l
        </span>
      </div>
      <div className="absolute bottom-0 left-0 h-full translate-y-6">
        <span className="inline-block" id="email">
          T
        </span>
        <span className="inline-block" id="email">
          h
        </span>
        <span className="inline-block" id="email">
          a
        </span>
        <span className="inline-block" id="email">
          l
        </span>
        <span className="inline-block" id="email">
          i
        </span>
        <span className="inline-block" id="email">
          s
        </span>
        <span className="inline-block" id="email">
          o
        </span>
        <span className="inline-block" id="email">
          n
        </span>
        <span className="inline-block" id="email">
          d
        </span>
        <span className="inline-block" id="email">
          m
        </span>
        <span className="inline-block" id="email">
          c
        </span>
        <span className="inline-block" id="email">
          c
        </span>
        <span className="inline-block" id="email">
          @
        </span>
        <span className="inline-block" id="email">
          g
        </span>
        <span className="inline-block" id="email">
          m
        </span>
        <span className="inline-block" id="email">
          a
        </span>
        <span className="inline-block" id="email">
          i
        </span>
        <span className="inline-block" id="email">
          l
        </span>
        <span className="inline-block" id="email">
          .
        </span>
        <span className="inline-block" id="email">
          c
        </span>
        <span className="inline-block" id="email">
          o
        </span>
        <span className="inline-block" id="email">
          m
        </span>
      </div>
      <div className="absolute bottom-0 left-0 top-0 translate-y-6" id="copied">
        <span className="inline-block" id="copied">
          C
        </span>
        <span className="inline-block" id="copied">
          o
        </span>
        <span className="inline-block" id="copied">
          p
        </span>
        <span className="inline-block" id="copied">
          i
        </span>
        <span className="inline-block" id="copied">
          e
        </span>
        <span className="inline-block" id="copied">
          d
        </span>
      </div>
      <Copy
        className="absolute bottom-0 right-8 ml-2 inline-block h-4 w-4 opacity-0"
        id="copyIcon"
      />
      <Done
        className="absolute bottom-0 right-8 ml-2 inline-block h-4 w-4 opacity-0"
        id="doneIcon"
      />
    </button>
  );
}
