import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Fraunces } from "next/font/google";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

// Only used for the role in the hero, so it isn't worth preloading.
const frauncesItalic = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  axes: ["opsz"],
  preload: false,
  variable: "--font-fraunces-italic",
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson",
});

const title = "Jose Valor — Senior Frontend Engineer";
const description =
  "Senior frontend engineer building accessible, high-traffic booking and e-commerce frontends with React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jose-valor.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${frauncesItalic.variable} ${atkinson.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">{children}</body>
    </html>
  );
}
