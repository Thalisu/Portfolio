import { inter, poppins } from "../ui/fonts";
import { SkillSection as PropTypes } from "../lib/types";

export default function SkillSection(props: PropTypes) {
  const style = {
    top: 163 + props.z * 70,
    zIndex: props.z,
  };

  return (
    <div
      className={`border-t-[1px] border-spacing flex flex-col gap-3 py-4 bg-secondary sticky`}
      style={style}
    >
      <h3 className={`${poppins.className} font-bold text-4xl`}>
        {props.label}
      </h3>
      <div className="flex justify-between">
        <p className={`${inter.className} text-lg max-w-md w-full`}>
          {props.description}
        </p>
        <div className="flex flex-col flex-grow max-w-lg h-[30svh]">
          {props.bulletPoints.map((point, i) => {
            const border =
              props.bulletPoints.length === 3 && i === 1 && "border-y-[1px]";
            return (
              <h4
                className={`${poppins.className} font-bold text-2xl uppercase py-4 ${border} border-spacing`}
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
