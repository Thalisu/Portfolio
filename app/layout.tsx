import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={` w-svw h-fit flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
