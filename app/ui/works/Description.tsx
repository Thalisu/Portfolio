import { useTranslations } from "next-intl";
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
  const t = useTranslations("works");
  return (
    <div className="mx-auto flex max-w-5xl flex-col content-between justify-between gap-6 px-2 pb-24 text-primary md:flex-row">
      <div className="flex flex-grow flex-wrap gap-6">
        <div className="h-fit">
          <h2 className={`${poppins.className} font-bold opacity-80`}>
            {t("techs")}
          </h2>
          <p className={`${inter.className} text-sm font-semibold`}>
            {techs.join(", ")}
          </p>
        </div>
        <div className="h-fit">
          <h2 className={`${poppins.className} font-bold opacity-80`}>
            {t("age")}
          </h2>
          <p className={`${inter.className} text-sm font-semibold`}>{age}</p>
        </div>
      </div>
      <p
        className={`${inter.className} max-w-lg text-sm font-semibold sm:text-base`}
      >
        {desc}
      </p>
    </div>
  );
}
