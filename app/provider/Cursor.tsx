"use client";
import cursorContext from "../context/cursor";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Cursor, CursorAnimations, MouseEvents } from "../lib/types";
import { CursorSVG } from "../components/svgs";
import { addClassList, removeClassList } from "../lib/utils";

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animations = useRef<CursorAnimations>({
    onPageOpen: () => {},
    scaleDefault: () => {},
    scaleUp: (scale: number) => {},
    handleMouseMove: (e: MouseEvents) => {},
    turbulence: null,
  });
  const [cursor, setCursor] = useState<Cursor>({
    size: 16,
    scaleDefault: () => {},
    scaleUp: (scale: number) => {},
    handleMouseMove: (e: MouseEvents) => {},
  });
  const [isHovering, setIsHovering] = useState({
    state: false,
    center: { x: 0, y: 0 },
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      const childs = Array.from(ref.current.childNodes);

      animations.current.onPageOpen = contextSafe(() => {
        childs.map((child, i) => {
          gsap.set(child, {
            scale: (childs.length - i) / childs.length,
          });
        });
        gsap.set(childs, {
          width: cursor.size,
          height: cursor.size,
        });
        gsap.set("#circleSVG", {
          r: cursor.size / 2,
          cx: "50%",
          cy: "50%",
        });
      });
      const tl = gsap.timeline({ paused: true });

      animations.current.turbulence = tl
        .to(
          "#turbulence",
          {
            attr: { baseFrequency: 0.5 },
            duration: 5,
            yoyo: true,
            repeat: -1,
            ease: "none",
          },
          "<",
        )
        .set(
          "#turbulence",
          {
            attr: { numOctaves: 5 },
          },
          "<",
        )
        .to(
          childs[0],
          {
            rotateZ: -360,
            duration: 4,
            ease: "none",
            repeat: -1,
          },
          "<",
        );

      animations.current.scaleDefault = contextSafe(() => {
        animations.current.turbulence?.pause(0);
        gsap.set(childs, { opacity: 1 });
        childs.map((child, i) => {
          gsap.to(child, {
            scale: (childs.length - i) / childs.length,
            duration: 0.25,
            overwrite: "auto",
          });
        });
        gsap.set("#turbulence", {
          attr: { numOctaves: 0 },
          overwrite: "auto",
        });
        let classListChange = childs[0] as HTMLElement;
        removeClassList(["mergeEffect"], [childs[0], childs[1]]);
        classListChange.classList.remove("mergeEffect");
        classListChange = childs[1] as HTMLElement;
        classListChange.classList.remove("mergeEffect");
      });

      animations.current.scaleUp = contextSafe(
        (scale: number, animate: boolean) => {
          gsap.set(childs, { opacity: 0, overwrite: "auto" });
          gsap.set([childs[0], childs[1]], { opacity: 1, overwrite: "auto" });
          gsap.to(childs, {
            scale: scale * 0.9,
            duration: 0.25,
            overwrite: "auto",
          });
          gsap.to(childs[0], { scale, duration: 0.25, overwrite: "auto" });
          if (animate) {
            addClassList(["mergeEffect"], [childs[0], childs[1]]);
            animations.current.turbulence?.play(0);
          }
        },
      );
    },
    { scope: ref },
  );

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      animations.current.handleMouseMove = contextSafe((e: MouseEvents) => {
        if (!isHovering.state) {
          gsap.to("#circle", {
            x: e.clientX - cursor.size / 2,
            y: e.clientY - cursor.size / 2,
            stagger: 0.003,
            duration: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          });
        } else {
          gsap.to("#circle", {
            x: isHovering.center.x - cursor.size / 2,
            y: isHovering.center.y - cursor.size / 2,
            duration: 0.25,
            ease: "power3.out",
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
    const { onPageOpen, ...rest } = animations.current;
    animations.current.onPageOpen();
    setCursor((prev) => ({ ...prev, ...rest }));
  }, []);

  return (
    <cursorContext.Provider value={{ cursor: cursor, setIsHovering }}>
      <div
        ref={ref}
        className="pointer-events-none fixed z-[9999999] h-svh w-svw bg-transparent mix-blend-difference"
      >
        <CursorSVG className="fixed h-4 w-4" id="circle"></CursorSVG>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
        <div className="fixed rounded-full bg-primary" id="circle"></div>
      </div>
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
