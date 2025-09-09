import React from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Open_Sans } from "next/font/google";

import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";

import type { Metadata } from "next";
import type { JSX } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lexie Choi | Software Engineer",
  description: "Welcome to Lexie Choi's developer portfolio!",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html className="scroll-smooth" lang="en">
    {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
      <GoogleAnalytics
        measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
    ) : null}
    <body className={openSans.className}>
      {children}
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
