"use client";
import gsap from "gsap";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { CursorContext, MouseEvents } from "../lib/types";
import cursorContext from "@/app/context/cursor";
import { useGSAP } from "@gsap/react";
import { getCenter, isMobile } from "../lib/utils";
import CustomLink from "./CustomLink";
import { Link } from "@/i18n/routing";

interface IProps {
  children: React.ReactNode;
  className: string;
  href: string;
  button?: boolean;
  scale?: number;
  center?: boolean;
  animate?: boolean;
  text?: string;
  link?: boolean;
  onClick?: () => void;
  target?: string;
}

export default function ClickableContainer({
  children,
  href,
  className,
  scale = 2,
  center = true,
  onClick,
  animate = true,
  button = false,
  link = false,
  target = "_blank",
}: IProps) {
  const { cursor, setIsHovering } = useContext(cursorContext) as CursorContext;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
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
    if (isMobile()) return;
    const onMouseLeave = handlers.current.handleMouseLeave;
    const onMouseEnter = handlers.current.handleMouseEnter;
    const container = ref.current;

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("click", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("click", onMouseLeave);
    };
  }, [cursor]);

  if (button)
    return (
      <button className={className} ref={ref} onClick={onClick}>
        {children}
      </button>
    );

  return link ? (
    <CustomLink href={href} ref={ref} className={className}>
      {children}
    </CustomLink>
  ) : (
    <Link href={href} className={className} target={target} ref={ref}>
      {children}
    </Link>
  );
}
