import { useEffect, useRef, useState } from "react";
import Banners from "./Banners";
import transitionContext from "@/app/context/routeTransition";
import { useGSAP } from "@gsap/react";
import onPageOpen from "./animations/onPageOpen";
import { default as transitionAnimation } from "./animations/transition";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const TransitionProvider = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const ref = useRef(null);

  const [transition, setTransition] =
    useState<(href: string, router: AppRouterInstance, path: string) => void>();
  useGSAP(
    (context, contextSafe) => {
      if (!contextSafe) return;

      onPageOpen();

      const transitionFunction = contextSafe(
        (href: string, router: AppRouterInstance, path: string) => {
          transitionAnimation(href, router, path);
        },
      );

      setTransition(() => transitionFunction);
    },
    { scope: ref },
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <transitionContext.Provider value={{ transition }}>
      <Banners ref={ref} path={path} />
      {children}
    </transitionContext.Provider>
  );
};
export default TransitionProvider;
