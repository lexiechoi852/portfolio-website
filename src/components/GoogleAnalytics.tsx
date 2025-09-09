"use client";

import React from "react";

import Script from "next/script";

import type { JSX } from "react";

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics = ({
  measurementId,
}: GoogleAnalyticsProps): JSX.Element => (
  <React.Fragment>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
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
  </React.Fragment>
);

export default GoogleAnalytics;
