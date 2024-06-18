"use client";
import { Curtains } from "react-curtains";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const onCurtainsError = (curtains: unknown) => {
    console.log("curtain error", curtains);
  };
  return <Curtains onError={onCurtainsError}>{children}</Curtains>;
}
