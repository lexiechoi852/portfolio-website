import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lexie Choi | Software Engineer",
  description: "Welcome to Lexie Choi's developer portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
        />
      ) : null}
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
