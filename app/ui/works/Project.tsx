"use client";
import { Project } from "@/app/lib/types";
import Image from "next/image";
import { inter, poppins } from "../fonts";
import Buttons from "@/app/components/buttons/Buttons";

export default function Projects(props: Project) {
  return (
    <div className="flex w-full flex-col items-center px-2">
      <h1
        className={`${poppins.className} text-end text-4xl font-bold uppercase text-black/90 sm:text-5xl`}
      >
        {props.name}
      </h1>
      <div
        className="relative aspect-video w-full rounded border-4 border-spacing shadow-2xl sm:w-5/12 sm:min-w-[37rem]"
        style={props.pos}
      >
        <Image src={props.img} alt={props.name} fill={true}></Image>
      </div>
      <Buttons
        text="Ver site"
        to={props.href}
        className={`${inter.className} mt-7 h-10 w-28 cursor-none gap-1 rounded-lg border border-primary px-3 py-3 text-primary sm:mt-9 sm:h-10 sm:w-32 sm:py-4`}
      />
    </div>
  );
}
