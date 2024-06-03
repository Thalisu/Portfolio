"use client";
import cursorContext from "../context/cursor";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Cursor, MouseEvents } from "../lib/types";
import { CursorSVG } from "../components/svgs";

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animations = useRef<Cursor>({
    scaleDefault: () => {},
    scaleUp: (scale: number) => {},
    handleMouseMove: (e: MouseEvents) => {},
  });
  const [cursor, setCursor] = useState<Cursor>();
  const [isHovering, setIsHovering] = useState({
    state: false,
    center: { x: 0, y: 0 },
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      const childs = Array.from(ref.current.childNodes);
      childs.map((child, i) => {
        gsap.set(child, {
          scale: (childs.length - i) / childs.length,
        });
      });

      animations.current.scaleDefault = contextSafe(() => {
        childs.map((child, i) => {
          gsap.to(child, {
            scale: (childs.length - i) / childs.length,
            overwrite: "auto",
            duration: 0.25,
          });
        });
      });

      animations.current.scaleUp = contextSafe((scale: number) => {
        return gsap.to(childs, { scale, duration: 0.25, overwrite: "auto" });
      });

      animations.current.handleMouseMove = contextSafe((e: MouseEvents) => {
        if (!isHovering.state) {
          gsap.set(childs, { opacity: 1 });
          gsap.to(childs, {
            x: e.clientX - 8,
            y: e.clientY - 8,
            stagger: 0.003,
            duration: 0.1,
            ease: "power3",
            overwrite: "auto",
          });
        } else {
          gsap.set(childs, { opacity: 0 });
          gsap.set(childs[0], { opacity: 1 });
          gsap.to(childs, {
            x: isHovering.center.x - 8,
            y: isHovering.center.y - 8,
            duration: 0.25,
            ease: "power4",
            overwrite: "auto",
          });
        }
      });
    },
    { scope: ref, dependencies: [isHovering] },
  );

  useEffect(() => {
    const handler = animations.current.handleMouseMove;
    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, [isHovering]);
  useEffect(() => {
    setCursor({ ...animations.current });
  }, []);

  return (
    <cursorContext.Provider value={{ cursor: cursor, setIsHovering }}>
      <div
        ref={ref}
        className="pointer-events-none fixed z-[9999999] h-svh w-svw bg-transparent mix-blend-difference"
      >
        <CursorSVG
          className="fixed aspect-square w-4"
          id="circle 1"
        ></CursorSVG>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
        <div
          className="fixed aspect-square w-4 rounded-full bg-primary"
          id="circle"
        ></div>
      </div>
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
