"use client";
import ClickableContainer from "@/app/components/ClickableContainer";
import { inter } from "../../fonts";
import CallMe from "./CallMe";

export default function Contact() {
  return (
    <div className="relative z-0 flex w-full -translate-y-48 flex-col items-center justify-center">
      <h2 className={`${inter.className} text-2xl text-primary opacity-70`}>
        Precisa criar algo incrível?
      </h2>
      <CallMe />
      <div className="flex w-full max-w-lg justify-between">
        <div className="flex flex-col">
          <h3>Contatos</h3>
          <ClickableContainer href="" className="">
            Gmail
          </ClickableContainer>
          <ClickableContainer href="" className="">
            Linkedin
          </ClickableContainer>
          <ClickableContainer href="" className="">
            GitHub
          </ClickableContainer>
        </div>
        <div className="flex flex-col">
          <h3>Navegação</h3>
          <ClickableContainer href="" className="">
            Home
          </ClickableContainer>
          <ClickableContainer href="" className="">
            Sobre
          </ClickableContainer>
          <ClickableContainer href="" className="">
            Projetos
          </ClickableContainer>
          <ClickableContainer href="" className="">
            Contato
          </ClickableContainer>
        </div>
      </div>
    </div>
  );
}
