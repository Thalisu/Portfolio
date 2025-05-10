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
      className={`sticky flex flex-col gap-3 border-t-[1px] border-spacing bg-secondary px-4 py-4`}
      style={style}
      ref={container}
    >
      <h3 className={`${poppins.className} text-3xl font-bold sm:text-4xl`}>
        {props.label}
      </h3>
      <div className="flex flex-col justify-between sm:flex-row">
        <p
          className={`${inter.className} w-full text-base sm:max-w-md sm:text-lg`}
        >
          {props.description}
        </p>
        <div className="mt-4 flex h-[30svh] max-w-lg flex-grow flex-col sm:mt-0">
          {props.bulletPoints.map((point, i) => {
            const border =
              props.bulletPoints.length === 3 && i === 1 && "border-y-[1px]";
            return (
              <h4
                className={`${poppins.className} ${i !== 0 ? "py-2 sm:py-4" : "pb-2 sm:pb-4"} text-xl font-bold uppercase sm:text-2xl ${border} border-spacing`}
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
