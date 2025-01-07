import ClickableContainer from "@/app/components/ClickableContainer";
import { poppins } from "../../fonts";
import useCallMeAnimations from "./animations/callMe";

export default function CallMe() {
  const { ref, animations } = useCallMeAnimations();
  const handleMouseEnter = () => {
    if (!animations) return;
    if (animations[0].isActive()) {
      animations[0].play();
    } else if (animations[1].isActive()) {
      animations[1].reverse();
    } else {
      animations[0].play(0);
    }
  };
  const handleMouseLeave = () => {
    if (!animations) return;
    if (animations[0].isActive()) {
      animations[0].reverse();
    } else if (animations[0].progress() === 1) {
      animations[1].play(0);
    }
  };
  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ClickableContainer
        href="https://wa.me/93988056885"
        className={`${poppins.className} bigTitle cursor-none text-9xl font-bold uppercase text-primary`}
        center={false}
        scale={4}
      >
        Me chame!
      </ClickableContainer>
      <div className="under absolute bottom-2 left-0 right-full h-1 bg-secondary opacity-70"></div>
    </div>
  );
}
