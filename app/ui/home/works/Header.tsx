"use client";
import useWorksHeaderAnimation from "@/app/animations/works/header";
import { poppins } from "../../fonts";

export default function Header() {
  const header = useWorksHeaderAnimation();
  return (
    <h2
      className={`${poppins.className} clip text-5xl font-bold uppercase text-secondary`}
      ref={header}
    >
      Meus Projetos
    </h2>
  );
}
