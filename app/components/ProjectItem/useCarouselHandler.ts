import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MouseEvents, QuickToRef } from "@/app/lib/types";
import { getCenter } from "@/app/lib/utils";
import { isHTMLElement } from "@/app/lib/typeGuards";
import { quickTo } from "@/app/lib/animations";
const useCarouselHandler = () => {
  const ref = useRef<HTMLLIElement>(null);
  const mouseMove = useRef<QuickToRef>();
  const carouselSize = useRef({ width: 0, height: 0 });

  const { contextSafe } = useGSAP(
    () => {
      if (!ref.current) return;
      mouseMove.current = {
        xTo: quickTo(".carousel", "x"),
        yTo: quickTo(".carousel", "y"),
      };
      if (isHTMLElement(ref.current.childNodes[0])) {
        const { width } = ref.current.childNodes[0].getBoundingClientRect();
        carouselSize.current = { width, height: width * 0.667 };
      }
    },
    { scope: ref },
  );

  const handleMouseMove = (e: MouseEvents) => {
    const centerContainer = getCenter(ref.current);
    contextSafe(() => {
      if (!mouseMove.current || !ref.current) return;
      mouseMove.current.xTo(e.clientX - centerContainer.x);
      mouseMove.current.yTo(
        e.clientY - centerContainer.y + carouselSize.current.height,
      );
    })();
  };
  return { ref, handleMouseMove };
};

export default useCarouselHandler;
