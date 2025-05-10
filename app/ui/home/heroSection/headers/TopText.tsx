import { useTranslations } from "next-intl";
import { poppins } from "../../../fonts";

export default function TopText() {
  const t = useTranslations("heroSection");
  return (
    <div
      className={`${poppins.className} clip flex w-max items-center uppercase`}
      id="topText"
    >
      <p className="smallTitle w-max text-xl font-bold leading-[22px] text-primary sm:text-2xl">
        {t("hi")}&nbsp;
      </p>
      <p className="smallTitle w-max text-xl font-bold text-primary sm:text-2xl">
        👋
      </p>
      <p className="smallTitle w-max text-xl font-bold leading-[22px] text-primary sm:text-2xl">
        &nbsp;{t("iAm")}&nbsp;
      </p>
      <h1 className="smallTitle w-max text-xl font-bold leading-[22px] text-primary sm:text-2xl">
        thalison
      </h1>
      <p className="smallTitle w-max text-xl font-bold leading-[22px] text-primary sm:text-2xl">
        {t("a")}
      </p>
    </div>
  );
}
