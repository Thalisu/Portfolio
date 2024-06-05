import { addClassList } from "@/app/lib/utils";
import gsap from "gsap";

const scaleUp = (
  scale: number,
  animate: boolean,
  childs: ChildNode[],
  turbulence: gsap.core.Timeline | undefined,
) => {
  gsap.set(childs, { opacity: 0, overwrite: "auto" });
  gsap.set([childs[0], childs[1]], { opacity: 1, overwrite: "auto" });
  gsap.to([childs[1]], {
    scale: scale * 0.9,
    duration: 0.25,
    overwrite: "auto",
  });
  gsap.to(childs[0], { scale, duration: 0.25, overwrite: "auto" });
  if (animate) {
    addClassList(["mergeEffect"], [childs[0], childs[1]]);
    turbulence?.play(0);
  }
};

export default scaleUp;
