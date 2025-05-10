import { poppins } from "@/app/ui/fonts";

export default function MiddleText() {
  return (
    <div id="middleText" className="">
      <h2
        className={`${poppins.className} w-max text-6xl font-bold uppercase !leading-[0] text-gray-700 text-primary sm:text-8xl`}
      >
        fullstack
      </h2>
    </div>
  );
}
