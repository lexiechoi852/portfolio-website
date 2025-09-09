import React from "react";

import type { JSX } from "react";

const DownIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 text-gray-800 dark:text-white"
    fill="none"
    viewBox="0 0 10 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 7 4 4 4-4M1 1l4 4 4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default DownIcon;
