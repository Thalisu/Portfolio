import type { Metadata } from "next";
import "./globals.css";

import { inter } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Thalison de melo",
  description: "thalison's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
