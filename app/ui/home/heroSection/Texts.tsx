"use client";
import MiddleText from "./MiddleText";
import TopText from "./TopText";
import BottomText from "./BottomText";
import useHeroTextAnimation from "@/app/hooks/animations/useHeroTextAnimation";

export default function Texts() {
  const { refTop, refMiddle, refBottom } = useHeroTextAnimation();
  return (
    <div className="w-fit h-fit flex flex-col gap-12 relative">
      <TopText ref={refTop} />
      <MiddleText ref={refMiddle} />
      <BottomText ref={refBottom} />
    </div>
  );
}
