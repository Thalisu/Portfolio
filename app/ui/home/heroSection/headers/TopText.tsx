import { forwardRef } from "react";
import { poppins } from "../../../fonts";

export default function TopText() {
  return (
    <div
      className={`${poppins.className} flex uppercase w-max clip  items-center`}
      id="topText"
    >
      <p className="font-bold text-2xl w-max text-primary leading-[22px] ">
        {`oi!`}&nbsp;
      </p>
      <p className="font-bold text-2xl w-max text-primary">👋</p>
      <p className="font-bold text-2xl w-max text-primary leading-[22px] ">
        &nbsp;{"eu sou o"}&nbsp;
      </p>
      <h1 className="font-bold text-2xl w-max text-primary leading-[22px] ">
        thalison
      </h1>
      <p className="font-bold text-2xl w-max text-primary leading-[22px] ">
        , um
      </p>
    </div>
  );
}
