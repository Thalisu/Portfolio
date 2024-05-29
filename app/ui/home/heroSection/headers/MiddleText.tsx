import { poppins } from "@/app/ui/fonts";
import { forwardRef } from "react";

export default function MiddleText() {
  return (
    <div id="middleText" className="">
      <h2
        className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary leading-[0] `}
      >
        fullstack
      </h2>
    </div>
  );
}
