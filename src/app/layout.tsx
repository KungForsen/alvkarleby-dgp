import type { Metadata } from "next";
import { Oswald, Inter, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvkarlebydgp.se"),
  title: "Välkommen till Älvkarleby Discgolfpark",
  description:
    "Älvkarleby Discgolfpark – en 18-hålsbana vid Dalälven med fyra layouter, för alla åldrar och nivåer.",
  openGraph: {
    title: "Älvkarleby Discgolfpark",
    description:
      "En 18-hålsbana vid Dalälven med fyra layouter, för alla åldrar och nivåer.",
    url: "https://alvkarlebydgp.se",
    siteName: "Älvkarleby IK Discgolf",
    locale: "sv_SE",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Älvkarleby Discgolfpark",
    description:
      "En 18-hålsbana vid Dalälven med fyra layouter, för alla åldrar och nivåer.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
