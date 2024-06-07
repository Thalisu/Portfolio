"use client";
import React, { ForwardedRef, forwardRef, useContext, useEffect } from "react";
import transitionContext from "../context/routeTransition";
import { TransitionContext } from "../lib/types";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default forwardRef(function CustomLink(
  props: { href: string; className: string; children: React.ReactNode },
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { transition } = useContext(transitionContext) as TransitionContext;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.prefetch(props.href);
  }, [router, props.href]);

  const handleClick = () => {
    if (pathname !== props.href && transition)
      transition(props.href, router, props.href);
  };

  return (
    <button className={props.className} ref={ref} onClick={handleClick}>
      {props.children}
    </button>
  );
});
