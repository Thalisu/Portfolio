import { Project } from "@/app/lib/types";
import Image from "next/image";
import { poppins } from "../fonts";

export default function Projects(props: Project) {
  return (
    <div className="flex w-svw flex-col items-center py-24">
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
    </div>
  );
}
