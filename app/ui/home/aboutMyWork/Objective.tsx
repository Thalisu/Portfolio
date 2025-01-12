"use client";
import { Dev } from "@/app/components/svgs";
import { inter, poppins } from "../../fonts";
import useObjectiveAnimation from "./animations/objective";

export default function Objective() {
  const container = useObjectiveAnimation();

  return (
    <div
      className="sticky top-24 z-0 flex h-72 w-full flex-col gap-8"
      ref={container}
    >
      <h2
        className={`${poppins.className} clip whitespace-nowrap text-5xl font-bold uppercase text-secondary`}
        id="h3"
      >
        O que eu posso fazer
      </h2>
      <div className="relative flex justify-between">
        <p className={`${inter.className} mr-4 max-w-xl grow text-lg`} id="p">
          Meu principal objetivo é entregar uma&nbsp;
          <span className="text-secondary underline">
            experiência excepcional ao cliente,
          </span>
          &nbsp; não entrego somente um produto bem feito, eu entrego&nbsp;
          <span className="text-secondary underline">o melhor</span>
          &nbsp;que eu posso.
        </p>
        <Dev className="relative bottom-0 w-28 min-w-16" id="devSvg" />
      </div>
    </div>
  );
}
