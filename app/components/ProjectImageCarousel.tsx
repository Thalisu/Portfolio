import Image from "next/image";
import { Project } from "../lib/types";
import { ForwardedRef, forwardRef } from "react";

export default forwardRef(function ProjectImageCarousel(
  props: { projects: Project[] },
  ref: ForwardedRef<HTMLLIElement>,
) {
  return (
    <li
      className="pointer-events-none absolute left-0 top-0 h-full w-full"
      ref={ref}
    >
      <ul
        className={`carousel absolute aspect-video w-64 overflow-y-scroll rounded border-8 border-primary`}
      >
        {props.projects.map((project) => {
          return (
            <li key={crypto.randomUUID()} className="h-full w-full">
              <Image
                src={project.img}
                alt={project.name}
                width={1920}
                height={1080}
              ></Image>
            </li>
          );
        })}
      </ul>
    </li>
  );
});