import gsap from "gsap";

const onPageOpen = (childs: ChildNode[], cursorSize: number) => {
  childs.map((child, i) => {
    gsap.set(child, {
      scale: (childs.length - i) / childs.length,
    });
  });
  gsap.set(childs, {
    width: cursorSize,
    height: cursorSize,
  });
  gsap.set("#circleSVG", {
    r: cursorSize / 2,
    cx: "50%",
    cy: "50%",
  });
};

export default onPageOpen;
