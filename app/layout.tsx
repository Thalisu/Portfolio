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
        className={`min-h-screen w-svw bg-primary text-[#aeae9d] before:pointer-events-none before:fixed before:z-[1000000] before:h-full before:w-full before:opacity-20 before:[filter:url(#noiseFilter)]`}
      >
        <div
          className="h-full w-full cursor-none flex-col items-center overflow-clip"
          id="content-wrapper"
        >
          <SmoothScroll>
            <NoiseFilter className="pointer-events-none fixed h-0 w-0" />
            <CursorProvider>{children}</CursorProvider>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
