"use client";
import { Dev } from "@/app/components/svgs";
import { inter, poppins } from "../../fonts";
import useObjectiveAnimation from "@/app/animations/aboutMyWork/objective";

export default function Objective() {
  const container = useObjectiveAnimation();

  return (
    <div
      className="w-full h-72 flex flex-col gap-8 sticky top-[100px] z-0"
      ref={container}
    >
      <h2
        className={`${poppins.className} text-secondary uppercase font-bold text-5xl clip`}
        id="h3"
      >
        O que eu posso fazer
      </h2>
      <p className={`${inter.className} text-lg max-w-xl w-full`} id="p">
        Meu principal objetivo é entregar uma&nbsp;
        <span className="text-secondary underline">
          experiencia excepcional
        </span>
        &nbsp;nos meus produtos, não só um&nbsp;
        <span className="text-secondary underline">trabalho bem feito</span>, e
        sim, um trabalho feito para colocar&nbsp;
        <span className="text-secondary underline">sua empresa</span>
        &nbsp;em&nbsp;
        <span className="text-secondary underline">destaque</span>.
      </p>
      <Dev
        className="absolute top-0 bottom-7 right-10 mt-auto mb-auto w-28"
        id="devSvg"
      />
    </div>
  );
}
