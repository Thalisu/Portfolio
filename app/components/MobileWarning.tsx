"use client";
import { useLayoutEffect, useState } from "react";
import Modal from "./Modal";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTranslations } from "next-intl";

const MobileWarning = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const isMobile = useIsMobile();
  const t = useTranslations("mobileWarning");

  useLayoutEffect(() => {
    if (isOpen !== null) return;
    if (isMobile) setIsOpen(true);
  }, [isMobile, isOpen]);

  return (
    <Modal
      isOpen={isOpen || false}
      onClose={() => setIsOpen(false)}
      className="cursor-none px-4 pb-4 pt-3"
    >
      <div className="flex flex-col">
        <h2 className="self-center text-xl font-bold text-primary opacity-90">
          {t("title")}
        </h2>
        <p>{t("description")}</p>
      </div>
    </Modal>
  );
};

export default MobileWarning;
