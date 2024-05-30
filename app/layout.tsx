import type { Metadata } from "next";
import { Filter } from "./components/svgs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thalison de melo - bem vindo",
  description: "thalison's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`w-svw h-fit flex flex-col items-center bg-primary before:fixed overflow-x-hidden before:w-full before:h-full before:[filter:url(#noiseFilter)] before:z-[1000000] before:pointer-events-none before:opacity-20 before: text-[#aeae9d]`}
      >
        <Filter className="absolute pointer-events-none w-0 h-0" />
        {children}
      </body>
    </html>
  );
}
