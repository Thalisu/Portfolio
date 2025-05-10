"use client";
import useWorksHeaderAnimation from "./animations/header";
import { poppins } from "../../fonts";
import { useTranslations } from "next-intl";

export default function Header() {
  const header = useWorksHeaderAnimation();
  const t = useTranslations("works");
  return (
    <h2
      className={`${poppins.className} clip text-3xl font-bold uppercase text-secondary sm:text-5xl`}
      ref={header}
    >
      {t("title")}
    </h2>
  );
}
