"use client";
import { Dev } from "@/app/components/svgs";
import { inter, poppins } from "../../fonts";
import useObjectiveAnimation from "./animations/objective";
import { useTranslations } from "next-intl";

export default function Objective() {
  const container = useObjectiveAnimation();
  const t = useTranslations("objective");

  return (
    <div
      className="sticky top-24 z-0 flex h-72 w-full flex-col gap-8"
      ref={container}
    >
      <h2
        className={`${poppins.className} clip whitespace-nowrap text-3xl font-bold uppercase text-secondary sm:text-5xl`}
        id="h3"
      >
        {t("whatIDo")}
      </h2>
      <div className="relative flex justify-between">
        <p
          className={`${inter.className} mr-4 max-w-xl grow text-base sm:text-lg`}
          id="p"
        >
          {t("myObjective1")}&nbsp;
          <span className="text-secondary underline">{t("myObjective2")}</span>
          &nbsp; {t("myObjective3")}&nbsp;
          <span className="text-secondary underline">{t("myObjective4")}</span>
          &nbsp;{t("myObjective5")}
        </p>
        <Dev
          className="absolute bottom-0 right-0 w-14 opacity-80 sm:relative sm:w-28 sm:min-w-16 sm:opacity-100"
          id="devSvg"
        />
      </div>
    </div>
  );
}
