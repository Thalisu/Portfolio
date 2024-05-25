import Switch from "@/app/ui/home/heroSection/switch";
import MiddleText from "./MiddleText";
import TopText from "./TopText";
import BottomText from "./BottomText";

export default function HeroSection() {
  return (
    <div className="flex flex-col w-svw h-svh items-center justify-center relative">
      <div className="w-fit h-fit flex flex-col gap-12 relative">
        <TopText />
        <MiddleText />
        <BottomText />
        <Switch />
      </div>
    </div>
  );
}
