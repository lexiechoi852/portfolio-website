import React from "react";

import Link from "next/link";

import DownIcon from "./icons/DownIcon";
import UpIcon from "./icons/UpIcon";

import type { JSX } from "react";

interface NavigationProps {
  href: string;
}

const Navigation = ({ href }: NavigationProps): JSX.Element => (
  <div className="absolute bottom-10 right-0 flex flex-col gap-10">
    <Link aria-label="top section" href="#top">
      <UpIcon />
    </Link>
    {href !== "#profile" && (
      <Link aria-label="next section" href={href}>
        <DownIcon />
      </Link>
    )}
  </div>
);

export default Navigation;
