import { removeClassList } from "@/app/lib/utils";
import gsap from "gsap";

const toDefaultScale = (
  turbulence: gsap.core.Timeline,
  childs: ChildNode[],
) => {
  turbulence.pause(0);
  gsap.set(childs, { opacity: 1 });
  childs.map((child, i) => {
    gsap.to(child, {
      scale: (childs.length - i) / childs.length,
      duration: 0.25,
      overwrite: "auto",
    });
  });
  gsap.set("#turbulence", {
    attr: { numOctaves: 0 },
    overwrite: "auto",
  });
  removeClassList(["mergeEffect"], [childs[0], childs[1]]);
};

export default toDefaultScale;
