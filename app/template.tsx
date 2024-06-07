"use client";
import React from "react";
import TransitionProvider from "./provider/routeTransition";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return <TransitionProvider path={path}>{children}</TransitionProvider>;
}
