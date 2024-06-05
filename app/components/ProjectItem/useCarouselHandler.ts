import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { CarouselHandlers, MouseEvents, QuickToRef } from "@/app/lib/types";
import { getCenter } from "@/app/lib/utils";
import { quickTo } from "@/app/lib/animations";
import gsap from "gsap";

const useCarouselHandler = () => {
  const ref = useRef<HTMLLIElement>(null);
  const carouselMouseMove = useRef<QuickToRef>();
  const seeMouseMove = useRef<QuickToRef>();
  const [handlers, setHandlers] = useState<CarouselHandlers>();

  const { contextSafe } = useGSAP(
    () => {
      if (!ref.current) return;
      carouselMouseMove.current = {
        xTo: quickTo(".carousel", "x"),
        yTo: quickTo(".carousel", "y"),
      };
      seeMouseMove.current = {
        xTo: quickTo(".see", "x", 0.1),
        yTo: quickTo(".see", "y", 0.1),
      };

      gsap.set(".carousel", {
        opacity: 0,
        scale: 0,
      });

      gsap.set(".see", {
        opacity: 0,
      });

      setHandlers({
        handleMouseMove: (e: MouseEvents) => {
          const center = getCenter(ref.current);
          contextSafe(() => {
            carouselMouseMove.current?.xTo(e.clientX - center.x);
            carouselMouseMove.current?.yTo(e.clientY - center.y);
            seeMouseMove.current?.xTo(e.clientX - center.x - 12);
            seeMouseMove.current?.yTo(e.clientY - center.y);
          })();
        },
        handleMouseEnter: (e: MouseEvents) => {
          const center = getCenter(ref.current);
          contextSafe(() => {
            gsap.set(".carousel", {
              x: e.clientX - center.x,
              y: e.clientY - center.y,
              opacity: 1,
            });
            gsap.set(".see", {
              x: e.clientX - center.x - 12,
              y: e.clientY - center.y,
              opacity: 1,
            });
            gsap.to(".carousel", {
              scale: 1,
              width: 256,
              borderWidth: 8,
              duration: 0.5,
              overwrite: "auto",
              ease: "power3.out",
            });
          })();
        },
        handleMouseLeave: contextSafe(() => {
          gsap.to(".carousel", {
            width: 0,
            borderWidth: 0,
            duration: 0.5,
            overwrite: "auto",
            ease: "power3.in",
          });
          gsap.set(".see", {
            opacity: 0,
          });
        }),
      });
    },
    { scope: ref },
  );

  return { ref, handlers };
};

export default useCarouselHandler;
