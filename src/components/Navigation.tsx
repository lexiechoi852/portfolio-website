import React from "react";

import Link from "next/link";

import DownIcon from "./icons/DownIcon";
import UpIcon from "./icons/UpIcon";

import type { JSX } from "react";

interface NavigationProps {
  href: string;
}

const Navigation = ({ href }: NavigationProps): JSX.Element => {
  const generateClassName = (h: string) => {
    let className = "absolute bottom-10 right-0 lg:flex flex-col gap-10 hidden";
    if (h === "#experience") {
      className = "absolute bottom-20 right-0 lg:flex flex-col gap-10 hidden";
      return className;
    }
    return className;
  };

  return (
    <div className={generateClassName(href)}>
      {href !== "#experience" && (
        <Link aria-label="top section" href="#top">
          <UpIcon />
        </Link>
      )}
      {href !== "#profile" && (
        <Link aria-label="next section" href={href}>
          <DownIcon />
        </Link>
      )}
    </div>
  );
};

export default Navigation;
