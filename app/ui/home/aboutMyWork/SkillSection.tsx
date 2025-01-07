"use client";
import { inter, poppins } from "../../fonts";
import { SkillSection as PropTypes } from "../../../lib/types";
import useSkillSectionAnimation from "./animations/SkillSection";

export default function SkillSection(props: PropTypes) {
  const container = useSkillSectionAnimation(props.z);

  const style = {
    top: 10.1875 + props.z * 4.375 + "rem",
    zIndex: props.z,
  };

  return (
    <div
      className={`sticky flex flex-col gap-3 border-t-[1px] border-spacing bg-secondary py-4`}
      style={style}
      ref={container}
    >
      <h3 className={`${poppins.className} text-4xl font-bold`}>
        {props.label}
      </h3>
      <div className="flex justify-between">
        <p className={`${inter.className} w-full max-w-md text-lg`}>
          {props.description}
        </p>
        <div className="flex h-[30svh] max-w-lg flex-grow flex-col">
          {props.bulletPoints.map((point, i) => {
            const border =
              props.bulletPoints.length === 3 && i === 1 && "border-y-[1px]";
            return (
              <h4
                className={`${poppins.className} ${i !== 0 ? "py-4" : "pb-4"} text-2xl font-bold uppercase ${border} border-spacing`}
                key={crypto.randomUUID()}
              >
                {point}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}
