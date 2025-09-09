import React from "react";

import type { JSX } from "react";

const CloseIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 text-gray-700 dark:text-white"
    fill="none"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default CloseIcon;
