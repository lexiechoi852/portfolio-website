import React from "react";

import type { JSX } from "react";

const HamburgerMenuIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 text-gray-700 dark:text-white"
    fill="none"
    viewBox="0 0 17 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1h15M1 7h15M1 13h15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default HamburgerMenuIcon;
