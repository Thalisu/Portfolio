"use client";
import cursorContext from "../../context/cursor";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Cursor,
  CursorAnimations,
  MouseEvents,
  IsHovering,
} from "../../lib/types";
import CursorComponent from "./CursorComponent";
import onPageOpen from "./animations/onPageOpen";
import turbulence from "./animations/turbulence";
import toDefaultScale from "./animations/toDefaultScale";
import scaleUp from "./animations/scaleUp";
import handleMouseMove from "./animations/handleMouseMove";
import handleHover from "./animations/handleHover";

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animations = useRef<CursorAnimations>();
  const [cursor, setCursor] = useState<Cursor>();
  const [isHovering, setIsHovering] = useState<IsHovering>();

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      const childs = Array.from(ref.current.childNodes);
      childs.map((child: any) => child.classList.remove("opacity-0"));
      const cursorSize = 16;

      onPageOpen(childs, cursorSize);

      animations.current = {
        turbulence: turbulence(childs[0]),
        handleHover: contextSafe((isHovering) =>
          handleHover(isHovering, cursorSize, childs),
        ),
      };

      setCursor((prev) => ({
        ...prev,
        toDefaultScale: contextSafe(() => {
          toDefaultScale(animations.current?.turbulence, childs);
        }),
        scaleUp: contextSafe((scale, animate) => {
          scaleUp(scale, animate, childs, animations.current?.turbulence);
        }),
        handleMouseMove: contextSafe(
          (e: MouseEvents, stagger?: number, duration?: number) =>
            handleMouseMove(e, cursorSize, stagger, duration),
        ),
      }));
    },
    { scope: ref },
  );

  useEffect(() => {
    if (!cursor?.handleMouseMove || !ref.current) return;
    const handler = cursor.handleMouseMove;
    if (isHovering?.state) {
      animations.current?.handleHover(isHovering);
    } else {
      window.addEventListener("mousemove", handler);
      window.addEventListener("touchmove", handler);
    }

    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("touchmove", handler);
    };
  }, [isHovering, cursor]);

  return (
    <cursorContext.Provider value={{ cursor: cursor, setIsHovering }}>
      <CursorComponent ref={ref} />
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
