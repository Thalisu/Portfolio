import type { Metadata } from "next";
import { NoiseFilter } from "@/app/components/svgs";
import "@/app/globals.css";
import CursorProvider from "@/app/provider/Cursor";
import SmoothScroll from "@/app/components/SmoothScroll";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Thalison de melo - bem vindo",
  description: "thalison's portfolio",
  icons: "/favicon.svg",
};

interface IRootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<IRootLayoutProps>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`min-h-screen w-svw bg-primary text-[#aeae9d] before:pointer-events-none before:fixed before:z-[1000000] before:h-full before:w-full before:opacity-20 before:[filter:url(#noiseFilter)]`}
      >
        <div
          className="h-full w-full cursor-none flex-col items-center overflow-clip"
          id="content-wrapper"
        >
          <SmoothScroll>
            <NoiseFilter className="pointer-events-none fixed h-0 w-0" />
            <CursorProvider>
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </CursorProvider>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
