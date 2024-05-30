"use client";
import { useEffect, useRef, useState } from "react";
import { RelativeToSelfContainer as PropType } from "../lib/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RelativeToSelfContainer(props: PropType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [heigth, setHeight] = useState("auto");
  useEffect(() => {
    const container = ref.current as HTMLDivElement;
    const containerContentHeight = container.offsetHeight;
    setHeight(`${containerContentHeight + props.additionalPx}px`);
  }, [props.additionalPx]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const container = ref.current as HTMLDivElement;

      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          start: "20px bottom",
          end: "top 10%",
          scrub: true,
        },
        scale: 0.8,
        rotateZ: 10,
      });

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: "bottom 30%",
          end: "bottom ",
          scrub: true,
        },
        boxShadow: "0px 17px 55px 0px rgba(3,3,2,0)",
      });

      gsap.to("#container", {
        scrollTrigger: {
          trigger: container,
          start: "bottom-=100px center",
          end: "bottom-=100px 30%",
          scrub: true,
        },
        y: -260,
        opacity: 0,
      });

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: "bottom 70%",
          end: "bottom ",
          scrub: true,
        },
        borderBottomLeftRadius: "0% 0%",
        borderBottomRightRadius: "0% 0%",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`${props.classNames} rounded-t-[2rem]`}
      style={{ height: heigth }}
    >
      {props.children}
    </div>
  );
}
