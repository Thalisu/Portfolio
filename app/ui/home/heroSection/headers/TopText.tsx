import { useTranslations } from "next-intl";
import { poppins } from "../../../fonts";

export default function TopText() {
  const t = useTranslations("heroSection");
  return (
    <div
      className={`${poppins.className} clip flex w-max items-center uppercase`}
      id="topText"
    >
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        {t("hi")}&nbsp;
      </p>
      <p className="smallTitle w-max text-2xl font-bold text-primary">👋</p>
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        &nbsp;{t("iAm")}&nbsp;
      </p>
      <h1 className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        thalison
      </h1>
      <p className="smallTitle w-max text-2xl font-bold leading-[22px] text-primary">
        {t("a")}
      </p>
    </div>
  );
}
