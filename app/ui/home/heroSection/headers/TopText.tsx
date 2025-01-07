import { poppins } from "../../../fonts";

export default function TopText() {
  return (
    <div
      className={`${poppins.className} clip flex w-max items-center uppercase`}
      id="topText"
    >
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        {`oi!`}&nbsp;
      </p>
      <p className="smallTitle w-max text-2xl font-bold text-primary">👋</p>
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        &nbsp;{"eu sou o"}&nbsp;
      </p>
      <h1 className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        thalison
      </h1>
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        , um
      </p>
    </div>
  );
}
