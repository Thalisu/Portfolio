export const topTextAnimation = (tl: gsap.core.Timeline, topText: Node[]) => {
  tl.fromTo(
    topText,
    {
      y: -150,
    },
    {
      y: 0,
      stagger: 0.015,
      duration: 0.5,
    }
  );
};

export const emojiAnimation = (tl: gsap.core.Timeline, emoji: Node) => {
  tl.to(emoji, { rotateZ: 14, duration: 0.2 }, ">")
    .to(emoji, { rotateZ: -8, duration: 0.2 }, ">")
    .to(emoji, { rotateZ: 14, duration: 0.2 }, ">")
    .to(emoji, { rotateZ: -4, duration: 0.2 }, ">")
    .to(emoji, { rotateZ: 10, duration: 0.2 }, ">")
    .to(emoji, { rotateZ: 0, duration: 0.2 }, ">");
};

export const middleTextAnimation = (
  tl: gsap.core.Timeline,
  middleText: Node[]
) => {
  tl.from(
    middleText,
    {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.05,
      ease: "power2.out",
    },
    "<0.3"
  );
};

export const bottomTextAnimation = (
  tl: gsap.core.Timeline,
  bottomText: Node[]
) => {
  tl.from(
    bottomText,
    {
      y: 150,
      stagger: 0.015,
      duration: 0.4,
    },
    "<0.2"
  )
    .to(
      bottomText[bottomText.length - 2],
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
      },
      "<0.2"
    )
    .to(
      bottomText[bottomText.length - 1],
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
      },
      "<0.1"
    );
};
