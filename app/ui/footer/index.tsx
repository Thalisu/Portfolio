"use client";
import ClickableContainer from "../../components/ClickableContainer";
import { poppins } from "../fonts";
import Gmail from "./Gmail";

export default function Footer() {
  return (
    <footer className="flex h-44 w-full justify-center bg-secondary px-4 py-10 pb-4">
      <div className="flex w-full max-w-5xl justify-evenly gap-20">
        <div className="flex flex-grow flex-col gap-1">
          <h3
            className={`${poppins.className} relative mb-1 text-xl font-bold text-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary`}
          >
            Contatos
          </h3>
          <Gmail />
          <ClickableContainer
            href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
            className={`${poppins.className} relative w-fit cursor-none font-semibold text-secondary opacity-70`}
            scale={1.5}
          >
            Linkedin
          </ClickableContainer>
          <ClickableContainer
            href="https://github.com/Thalisu"
            className={`${poppins.className} relative w-fit cursor-none font-semibold text-secondary opacity-70`}
            scale={1.5}
          >
            GitHub
          </ClickableContainer>
        </div>
        <div className="flex flex-grow-[0.5] flex-col gap-1">
          <h3
            className={`${poppins.className} relative mb-1 text-xl font-bold text-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary`}
          >
            Navegação
          </h3>
          <ClickableContainer
            href="/"
            className={`${poppins.className} relative w-fit cursor-none font-semibold text-secondary opacity-70`}
            scale={1.5}
            link={true}
          >
            Home
          </ClickableContainer>
          <ClickableContainer
            href="#about"
            className={`${poppins.className} relative w-fit cursor-none font-semibold text-secondary opacity-70`}
            scale={1.5}
            link={true}
          >
            Sobre
          </ClickableContainer>
          <ClickableContainer
            href="/works"
            className={`${poppins.className} relative w-fit cursor-none font-semibold text-secondary opacity-70`}
            scale={1.5}
            link={true}
          >
            Projetos
          </ClickableContainer>
        </div>
      </div>
    </footer>
  );
}
