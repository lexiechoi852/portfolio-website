"use client";

import Script from "next/script";
import React from "react";

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({
  measurementId,
}: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `,
        }}
      />
    </>
  );
}
