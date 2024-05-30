import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useObjectiveAnimation = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    
  }, { scope: container });

  return container;
};
export default useObjectiveAnimation;
