"use client";
import useWorksHeaderAnimation from "@/app/animations/works/header";
import { poppins } from "../../fonts";

export default function Header() {
  const header = useWorksHeaderAnimation();
  return (
    <h2
      className={`${poppins.className} text-secondary uppercase font-bold text-5xl clip`}
      ref={header}
    >
      Meus Projetos
    </h2>
  );
}
