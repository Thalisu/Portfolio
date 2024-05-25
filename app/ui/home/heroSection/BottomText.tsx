"use client";
import useHeroBottomTextAnimation from "@/app/hooks/animations/useHeroBottomTextAnimation";
import { poppins } from "../../fonts";
import { GithubLogo, LinkedinLogo } from "@/app/components/svgs";

export default function BottomText() {
  const ref = useHeroBottomTextAnimation();
  return (
    <div
      className="w-full h-fit flex gap-2 items-center relative opacity-0 clip mt-3"
      ref={ref}
    >
      <h2
        className={`${poppins.className} text-5xl font-bold uppercase w-max text-primary leading-[35px]`}
      >
        developer
      </h2>
      <a
        href="https://github.com/Thalisu"
        className="ml-1 translate-y-7 opacity-0"
        target="_blank"
      >
        <GithubLogo className="w-5 text-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
        className="translate-y-7 opacity-0"
        target="_blank"
      >
        <LinkedinLogo className="w-5 text-primary" />
      </a>
    </div>
  );
}
