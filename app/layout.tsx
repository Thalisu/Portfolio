import type { Metadata } from "next";
import { NoiseFilter } from "./components/svgs";
import "./globals.css";
import CursorProvider from "./provider/Cursor";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Thalison de melo - bem vindo",
  description: "thalison's portfolio",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`flex h-fit w-svw cursor-none flex-col items-center overflow-x-hidden bg-primary text-[#aeae9d] before:pointer-events-none before:fixed before:z-[1000000] before:h-full before:w-full before:opacity-20 before:[filter:url(#noiseFilter)]`}
      >
        <SmoothScroll>
          <NoiseFilter className="pointer-events-none fixed h-0 w-0" />
          <CursorProvider>
            {children}
          </CursorProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
