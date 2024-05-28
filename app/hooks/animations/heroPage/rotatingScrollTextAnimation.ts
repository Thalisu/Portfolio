export const arrowAnimation = (tl: gsap.core.Timeline, arrowC: Node) => {
  const arrows = Array.from(arrowC.childNodes);

  const duration = 1;
  const pause = 0.2;
  const stagger = duration + pause;
  const repeatDelay = stagger * (arrows.length - 1) + pause;

  tl.set(arrowC, { autoAlpha: 1 });

  tl.fromTo(
    arrows,
    {
      y: -40,
      opacity: 0,
      rotateX: 90,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: duration,
      stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: repeatDelay,
      },
    },
    0
  ).to(
    arrows,
    {
      y: 40,
      opacity: 0,
      rotateX: -90,
      duration: duration,
      stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: repeatDelay,
      },
    },
    `<${stagger}`
  );
};

export const rotatingTextAnimation = (tl: gsap.core.Timeline, text: Node) => {
  const toOpacity1 = 50;
  const durationTotal = 7;
  const durationToOpacity1 = (toOpacity1 * durationTotal) / 360;
  const durationTo360 = durationTotal - durationToOpacity1;

  tl.fromTo(
    text,
    {
      rotateZ: 0,
      opacity: 0,
    },
    {
      rotateZ: toOpacity1,
      opacity: 1,
      duration: durationToOpacity1,
      ease: "none",
    },
    0
  )
    .to(text, {
      rotateZ: 360,
      duration: durationTo360,
      ease: "none",
    })
    .to(text, {
      rotateZ: 720,
      repeat: -1,
      duration: durationTotal,
      ease: "none",
    });
};
