"use client";
import React from "react";
import TransitionProvider from "@/app/provider/routeTransition";
import { usePathname } from "next/navigation";
import Footer from "@/app/ui/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <TransitionProvider path={path}>
      {children}
      <Footer />
    </TransitionProvider>
  );
}
