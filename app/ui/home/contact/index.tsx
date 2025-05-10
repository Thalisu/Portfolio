"use client";
import { inter } from "../../fonts";
import CallMe from "./CallMe";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <div className="relative z-0 -mb-28 flex w-full -translate-y-48 flex-col items-center justify-center">
      <h2
        className={`${inter.className} text-xl text-primary opacity-70 sm:text-2xl`}
      >
        {t("title")}
      </h2>
      <CallMe />
    </div>
  );
}
