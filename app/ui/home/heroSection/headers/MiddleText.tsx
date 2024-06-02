import { poppins } from "@/app/ui/fonts";
import { forwardRef } from "react";

export default function MiddleText() {
  return (
    <div id="middleText" className="">
      <h2
        className={`${poppins.className} w-max text-8xl font-bold uppercase leading-[0] text-gray-700 text-primary`}
      >
        fullstack
      </h2>
    </div>
  );
}
