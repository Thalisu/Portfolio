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
  const animations = useRef<CursorAnimations>({
    onPageOpen: () => {},
    toDefaultScale: () => {},
    scaleUp: (scale: number) => {},
    handleMouseMove: (e: MouseEvents) => {},
    handleHover: (isHovering: IsHovering) => {},
    turbulence: null,
  });
  const [cursor, setCursor] = useState<Cursor>({
    size: 16,
    toDefaultScale: () => {},
    scaleUp: (scale: number) => {},
    handleMouseMove: (e: MouseEvents) => {},
  });
  const [isHovering, setIsHovering] = useState<IsHovering>({
    state: false,
    center: { x: 0, y: 0 },
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      const childs = Array.from(ref.current.childNodes);

      onPageOpen(childs, cursor.size),
        (animations.current.turbulence = turbulence(childs[0]));

      animations.current.toDefaultScale = contextSafe(() => {
        if (animations.current.turbulence)
          toDefaultScale(animations.current.turbulence, childs);
      });

      animations.current.scaleUp = contextSafe((scale, animate) => {
        if (animations.current.turbulence)
          scaleUp(scale, animate, childs, animations.current.turbulence);
      });

      animations.current.handleMouseMove = contextSafe(
        (e: MouseEvents, stagger?: number, duration?: number) =>
          handleMouseMove(e, cursor.size, stagger, duration),
      );

      animations.current.handleHover = contextSafe((isHovering) =>
        handleHover(isHovering, cursor.size),
      );

      setCursor((prev) => ({
        ...prev,
        toDefaultScale: animations.current.toDefaultScale,
        scaleUp: animations.current.scaleUp,
        handleMouseMove: animations.current.handleMouseMove,
      }));
    },
    { scope: ref },
  );

  useEffect(() => {
    const handler = animations.current.handleMouseMove;
    isHovering.state
      ? animations.current.handleHover(isHovering)
      : window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, [isHovering]);

  return (
    <cursorContext.Provider value={{ cursor: cursor, setIsHovering }}>
      <CursorComponent ref={ref} />
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
