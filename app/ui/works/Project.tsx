"use client";
import { Project } from "@/app/lib/types";
import Image from "next/image";
import { inter, poppins } from "../fonts";
import Buttons from "@/app/components/buttons/Buttons";

export default function Projects(props: Project) {
  return (
    <div className="flex w-full flex-col items-center px-2">
      <h1
        className={`${poppins.className} translate-y-1 text-end text-5xl font-bold uppercase text-black/90`}
      >
        {props.name}
      </h1>
      <div
        className="relative aspect-video w-5/12 min-w-[37rem] rounded border-4 border-spacing shadow-2xl"
        style={props.pos}
      >
        <Image src={props.img} alt={props.name} fill={true}></Image>
      </div>
      <Buttons
        text="Ver site"
        to={props.href}
        className={`${inter.className} mt-9 h-10 w-32 cursor-none gap-1 rounded-lg border border-primary px-3 py-4 text-primary`}
      />
    </div>
  );
}
