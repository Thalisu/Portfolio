"use client";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ReactLenis root>{children}</ReactLenis>;
}
