import Image from "next/image";
import { Project } from "../../../../lib/types";
import { ForwardedRef, forwardRef } from "react";
import { poppins } from "../../../fonts";

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
        className={`carousel absolute left-1/2 top-1/2 aspect-video w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded border-8 border-primary`}
      >
        {props.projects.map((project) => {
          return (
            <li key={crypto.randomUUID()} className="h-full w-full">
              <Image
                src={project.img}
                alt={project.name}
                loading="eager"
                width={1920}
                height={1080}
              ></Image>
            </li>
          );
        })}
      </ul>
      <span
        className={`${poppins.className} see absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 text-secondary`}
      >
        Ver
      </span>
    </li>
  );
});
