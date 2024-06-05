"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { addClassList, removeClassList } from "../lib/utils";

export default function RelativeToSelfContainer({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom-=20px bottom",
          end: "bottom center",
          scrub: true,
          markers: true,
          onEnter: () => {
            addClassList(["pointer-events-none"], [ref.current]);
          },
          onLeaveBack: () => {
            removeClassList(["pointer-events-none"], [ref.current]);
          },
        },
        scale: 0.8,
        rotateZ: -10,
      });

      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "20px bottom",
          end: "top 10%",
          scrub: true,
        },
        scale: 0.8,
        rotateZ: 10,
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
