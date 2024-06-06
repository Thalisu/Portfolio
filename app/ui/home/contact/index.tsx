"use client";
import { inter } from "../../fonts";
import CallMe from "./CallMe";

export default function Contact() {
  return (
    <div className="relative z-0 -mb-28 flex w-full -translate-y-48 flex-col items-center justify-center">
      <h2 className={`${inter.className} text-2xl text-primary opacity-70`}>
        Precisa criar algo incrível?
      </h2>
      <CallMe />
    </div>
  );
}
