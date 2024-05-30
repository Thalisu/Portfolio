"use client";
import useWorksHeaderAnimation from "@/app/animations/works/header";
import { poppins } from "../../fonts";

export default function Header() {
  const header = useWorksHeaderAnimation();
  return (
    <h2
      className={`${poppins.className} text-primary uppercase font-bold text-5xl clip pt-32`}
      ref={header}
    >
      Meus Projetos
    </h2>
  );
}
