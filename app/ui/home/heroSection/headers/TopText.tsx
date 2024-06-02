import { forwardRef } from "react";
import { poppins } from "../../../fonts";

export default function TopText() {
  return (
    <div
      className={`${poppins.className} clip flex w-max items-center uppercase`}
      id="topText"
    >
      <p className="w-max text-2xl font-bold leading-[22px] text-primary">
        {`oi!`}&nbsp;
      </p>
      <p className="w-max text-2xl font-bold text-primary">👋</p>
      <p className="w-max text-2xl font-bold leading-[22px] text-primary">
        &nbsp;{"eu sou o"}&nbsp;
      </p>
      <h1 className="w-max text-2xl font-bold leading-[22px] text-primary">
        thalison
      </h1>
      <p className="w-max text-2xl font-bold leading-[22px] text-primary">
        , um
      </p>
    </div>
  );
}
