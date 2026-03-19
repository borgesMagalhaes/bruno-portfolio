import "./globals.css";
import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AnimatedBackground } from "@/components/tech/animated-background";
import { CursorGlow } from "@/components/tech/cursor-glow";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bruno Magalhães | Software Architect",
  description:
    "Portfólio profissional com experiência em .NET, SQL Server, DevOps e Arquitetura de Software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
        <AnimatedBackground />
        <CursorGlow />
        {isProduction && GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
