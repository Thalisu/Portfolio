"use client";

import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const animate = useRef<(e: MouseEvent) => void>((e: MouseEvent) => {});

  useGSAP(
    () => {
      if (!ref.current) return;
      const childs = Array.from(ref.current.childNodes);
      childs.map((child, i) => {
        gsap.set(child, { scale: (childs.length - i) / childs.length });
      });

      animate.current = (e: MouseEvent) => {
        gsap.to(childs, {
          x: e.clientX - 8,
          y: e.clientY - 8,
          stagger: 0.003,
          duration: 0.1,
          ease: "power4",
          overwrite: "auto",
        });
      };
    },
    { scope: ref }
  );

  useLayoutEffect(() => {
    window.addEventListener("mousemove", animate.current);
    return () => {
      window.removeEventListener("mousemove", animate.current);
    };
  }, []);

  return (
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
  );
}
