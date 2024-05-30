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
      const container = ref.current as HTMLDivElement;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: "20px bottom",
          end: "top 10%",
          scrub: true,
        },
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`${props.classNames} rounded-t-[10%]`}
      style={{ height: heigth }}
    >
      {props.children}
    </div>
  );
}
