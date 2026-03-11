import type { Metadata } from "next";
import { Crimson_Text, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pieter Talks Tech — Builder, Developer, Creator",
  description:
    "19-year-old builder sharing prompts, projects, and lessons from running a web dev agency, building iOS apps, and studying finance at Iowa State.",
  openGraph: {
    title: "Pieter Talks Tech",
    description:
      "Prompts, projects, and lessons from a 19-year-old builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${crimsonText.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
