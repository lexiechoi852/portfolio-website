import React from "react";
import Link from "next/link";
import UpIcon from "./icons/UpIcon";
import DownIcon from "./icons/DownIcon";

interface NavigationProps {
  href: string;
}

export default function Navigation({ href }: NavigationProps) {
  return (
    <div className="absolute bottom-10 right-0 flex flex-col gap-10">
      <Link href="#top" aria-label="top section">
        <UpIcon />
      </Link>
      {href !== "#profile" && (
        <Link href={href} aria-label="next section">
          <DownIcon />
        </Link>
      )}
    </div>
  );
}
