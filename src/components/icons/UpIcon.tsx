import React from "react";

import type { JSX } from "react";

const UpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 text-gray-800 dark:text-white"
    fill="none"
    viewBox="0 0 10 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5 5 1 1 5m8 6L5 7l-4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default UpIcon;
