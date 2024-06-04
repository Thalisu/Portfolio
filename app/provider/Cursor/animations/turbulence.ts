import gsap from "gsap";

const turbulence = (cursor: ChildNode) => {
  const tl = gsap.timeline({ paused: true });
  return tl
    .to(
      "#turbulence",
      {
        attr: { baseFrequency: 0.5 },
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "none",
      },
      "<",
    )
    .set(
      "#turbulence",
      {
        attr: { numOctaves: 5 },
      },
      "<",
    )
    .to(
      cursor,
      {
        rotateZ: -360,
        duration: 4,
        ease: "none",
        repeat: -1,
      },
      "<",
    );
};

export default turbulence;
