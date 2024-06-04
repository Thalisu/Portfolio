import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MouseEvents } from "@/app/lib/types";
import gsap from "gsap";
import { getCenter } from "@/app/lib/utils";
import { isHTMLElement } from "@/app/lib/typeGuards";
const useCarouselHandler = () => {
  const ref = useRef<HTMLLIElement>(null);
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();
  const carouselSize = useRef({ width: 0, height: 0 });

  const { context: _context, contextSafe } = useGSAP(
    () => {
      if (!ref.current) return;
      xTo.current = gsap.quickTo(".carousel", "x", {
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
      yTo.current = gsap.quickTo(".carousel", "y", {
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
      if (isHTMLElement(ref.current.childNodes[0])) {
        const { width } = ref.current.childNodes[0].getBoundingClientRect();
        carouselSize.current = { width, height: width * 0.667 };
      }
    },
    { scope: ref },
  );

  const handleMouseMove = contextSafe((e: MouseEvents) => {
    if (!xTo.current || !yTo.current || !ref.current) return;

    const centerContainer = getCenter(ref.current);

    xTo.current(e.clientX - centerContainer.x + carouselSize.current.width);
    yTo.current(e.clientY - centerContainer.y + carouselSize.current.height);
  });
  return { ref, handleMouseMove };
};

export default useCarouselHandler;
