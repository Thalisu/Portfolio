import { inter, poppins } from "../fonts";

export default function Description({
  desc,
  techs,
  age,
}: {
  desc: string;
  techs: string[];
  age: string;
}) {
  return (
    <div className="flex w-full max-w-5xl content-between justify-between gap-6 px-2 pb-24 text-primary">
      <div className="flex flex-grow flex-wrap gap-6">
        <div className="h-fit">
          <h2 className={`${poppins.className} font-bold opacity-80`}>
            Principais tecnologias
          </h2>
          <p className={`${inter.className} text-sm font-semibold`}>
            {techs.join(", ")}
          </p>
        </div>
        <div className="h-fit">
          <h2 className={`${poppins.className} font-bold opacity-80`}>Ano</h2>
          <p className={`${inter.className} text-sm font-semibold`}>{age}</p>
        </div>
      </div>
      <p className={`${inter.className} max-w-lg font-semibold`}>{desc}</p>
    </div>
  );
}
