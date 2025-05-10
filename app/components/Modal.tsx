"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import ClickableContainer from "./ClickableContainer";
import { CloseX } from "./svgs";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children, ...props }: IProps) {
  const { className, ...rest } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex cursor-none items-center justify-center bg-black bg-opacity-50">
      <div className="relative">
        <ClickableContainer
          className="absolute right-0 top-0 flex cursor-none items-center justify-center p-2 text-center font-sans text-xl font-semibold text-primary opacity-80"
          href=""
          button
          onClick={onClose}
        >
          <CloseX className="h-4 w-4" />
        </ClickableContainer>
        <div
          className={twMerge(
            "w-full max-w-lg rounded-lg bg-white p-6 shadow-lg",
            className,
          )}
          {...rest}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
