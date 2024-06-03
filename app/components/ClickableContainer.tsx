"useClient";
import gsap from "gsap";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { CursorContext } from "../lib/types";
import cursorContext from "@/app/context/cursor";
import { useGSAP } from "@gsap/react";

export default function ClickableContainer({
  children,
}: {
  children: React.ReactElement;
}) {
  const { cursor, setIsHovering } = useContext(cursorContext) as CursorContext;
  const ref = useRef<HTMLElement>(null);
  const handlers = useRef({
    handleMouseEnter: () => {},
    handleMouseLeave: () => {},
  });

  useGSAP(
    (context, contextSafe) => {
      if (!ref.current || !contextSafe || !cursor) return;

      handlers.current.handleMouseEnter = contextSafe(() => {
        if (!ref.current) return;
        const { top, left, width, height } =
          ref.current.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 };
        cursor.scaleUp(2);
        setIsHovering({ state: true, center });
      });

      handlers.current.handleMouseLeave = contextSafe(() => {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          overwrite: "auto",
        });
        cursor.scaleDefault();
        setIsHovering((prev) => ({ ...prev, state: false }));
      });
    },
    { scope: ref, dependencies: [cursor] },
  );

  useLayoutEffect(() => {
    if (!ref.current) return;
    const onMouseLeave = handlers.current.handleMouseLeave;
    const onMouseEnter = handlers.current.handleMouseEnter;
    const container = ref.current;
    console.log("s");

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cursor]);

  return React.cloneElement(children, { ref });
}
