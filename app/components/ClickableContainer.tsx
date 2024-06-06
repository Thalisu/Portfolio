"useClient";
import gsap from "gsap";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { CursorContext, MouseEvents } from "../lib/types";
import cursorContext from "@/app/context/cursor";
import { useGSAP } from "@gsap/react";
import { getCenter } from "../lib/utils";
import Link from "next/link";

export default function ClickableContainer({
  children,
  href,
  className,
  scale = 2,
  center = true,
  animate = true,
  link = false,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  scale?: number;
  center?: boolean;
  animate?: boolean;
  text?: string;
  link?: boolean;
}) {
  const { cursor, setIsHovering } = useContext(cursorContext) as CursorContext;
  const ref = useRef<HTMLAnchorElement>(null);
  const handlers = useRef({
    handleMouseEnter: () => {},
    handleMouseLeave: (e: MouseEvents) => {},
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe || !cursor) return;

      handlers.current.handleMouseEnter = () => {
        if (center) {
          cursor.scaleUp(scale, animate);
          setIsHovering({ state: true, center: getCenter(ref.current) });
        } else {
          cursor.scaleUp(scale, animate);
        }
      };

      handlers.current.handleMouseLeave = (e: MouseEvents) => {
        contextSafe(() =>
          gsap.to(ref.current, {
            x: 0,
            y: 0,
            overwrite: "auto",
          }),
        )();
        cursor.toDefaultScale();
        cursor.handleMouseMove(e, 0);
        setIsHovering((prev) => ({ ...prev, state: false }));
      };
    },
    { scope: ref, dependencies: [cursor] },
  );

  useLayoutEffect(() => {
    if (!ref.current) return;
    const onMouseLeave = handlers.current.handleMouseLeave;
    const onMouseEnter = handlers.current.handleMouseEnter;
    const container = ref.current;

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cursor]);

  return link ? (
    <Link href={href} className={className} ref={ref}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className} target="_blank" ref={ref}>
      {children}
    </a>
  );
}
