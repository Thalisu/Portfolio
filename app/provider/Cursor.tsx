"use client";
import cursorContext from "../context/cursor";
import { useGSAP } from "@gsap/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CursorAnimations, MouseEvents } from "../lib/types";

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const cursorAnimations = useRef<CursorAnimations>({
    move: () => {},
    scaleUp: () => {},
    scaleDown: () => {},
  });
  const [isHovering, setIsHovering] = useState({
    state: false,
    center: { x: 0, y: 0 },
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      const childs = Array.from(ref.current.childNodes);
      childs.map((child, i) => {
        gsap.set(child, { scale: (childs.length - i) / childs.length });
      });

      cursorAnimations.current.move = contextSafe((e: MouseEvents) => {
        if (!isHovering.state) {
          gsap.to(childs, {
            x: e.clientX - 8,
            y: e.clientY - 8,
            stagger: 0.003,
            duration: 0.1,
            ease: "power3",
            overwrite: "auto",
          });
        } else {
          gsap.to(childs, {
            x: isHovering.center.x - 8,
            y: isHovering.center.y - 8,
            duration: 0.25,
            ease: "power1",
          });
        }
      });

      cursorAnimations.current.scaleUp = contextSafe((scale) => {
        gsap.to(childs, {
          scale,
          duration: 0.25,
          overwrite: "auto",
        });
      });
      cursorAnimations.current.scaleDown = contextSafe(() => {
        childs.map((child, i) => {
          gsap.to(child, {
            scale: (childs.length - i) / childs.length,
            duration: 0.25,
          });
        });
      });
    },
    { scope: ref, dependencies: [isHovering] }
  );

  const setIsHoveringFunc = (
    isHovering: boolean,
    center = { x: 0, y: 0 },
    scale?: number
  ) => {
    if (isHovering) {
      cursorAnimations.current.scaleUp(scale);
      setIsHovering({ state: isHovering, center });
    } else {
      cursorAnimations.current.scaleDown();
      setIsHovering((prev) => ({ ...prev, state: isHovering }));
    }
  };

  useLayoutEffect(() => {
    const animation = cursorAnimations.current.move;
    window.addEventListener("mousemove", animation);
    return () => {
      window.removeEventListener("mousemove", animation);
    };
  }, [isHovering]);

  return (
    <cursorContext.Provider value={{ setIsHoveringFunc }}>
      <div
        ref={ref}
        className="fixed w-svw h-svh bg-transparent pointer-events-none z-[9999999] mix-blend-difference"
      >
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
        <div
          className="w-4 aspect-square rounded-full fixed bg-primary"
          id="circle"
        ></div>
      </div>
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
