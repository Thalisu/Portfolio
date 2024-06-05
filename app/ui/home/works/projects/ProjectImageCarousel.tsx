import Image from "next/image";
import { Project } from "../../../../lib/types";
import { ForwardedRef, forwardRef } from "react";
import { poppins } from "../../../fonts";
import { DiagonalArrow } from "@/app/components/svgs";

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
        className={`carousel absolute left-1/2 top-1/2 aspect-video w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded border-8 border-primary`}
      >
        {props.projects.map((project) => {
          return (
            <li
              key={crypto.randomUUID()}
              className="absolute bottom-0 left-0 right-0 top-0 opacity-0"
            >
              <Image
                src={project.img}
                alt={project.name}
                loading="eager"
                fill
                sizes="width: 288px"
                style={{ objectFit: "cover" }}
              ></Image>
            </li>
          );
        })}
      </ul>
      <span
        className={`${poppins.className} see absolute left-1/2 top-1/2 flex aspect-square w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-evenly rounded-full bg-secondary text-secondary`}
      >
        Ver
        <DiagonalArrow className="relative -left-1 -top-1 aspect-square w-2 text-secondary" />
      </span>
    </li>
  );
});
