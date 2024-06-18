import { Project } from "@/app/lib/types";
import Image from "next/image";

export default function Projects(props: Project) {
  return (
    <div
      className="relative aspect-video w-5/12 rounded border-4 border-spacing shadow-2xl"
      style={props.pos}
    >
      <Image src={props.img} alt={props.name} fill={true}></Image>
    </div>
  );
}
