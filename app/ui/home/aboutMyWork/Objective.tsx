"use client";
import { Dev } from "@/app/components/svgs";
import { inter, poppins } from "../../fonts";
import useObjectiveAnimation from "./animations/objective";

export default function Objective() {
  const container = useObjectiveAnimation();

  return (
    <div
      className="sticky top-[100px] z-0 flex h-72 w-full flex-col gap-8"
      ref={container}
    >
      <h2
        className={`${poppins.className} clip text-5xl font-bold uppercase text-secondary`}
        id="h3"
      >
        O que eu posso fazer
      </h2>
      <p className={`${inter.className} w-full max-w-xl text-lg`} id="p">
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
        className="absolute bottom-7 right-10 top-0 mb-auto mt-auto w-28"
        id="devSvg"
      />
    </div>
  );
}
