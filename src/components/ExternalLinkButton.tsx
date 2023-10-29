import React from "react";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

interface ExternalLinkButtonProps {
  href: string;
  name: string;
}

export default function ExternalLinkButton({
  href,
  name,
}: ExternalLinkButtonProps) {
  return (
    <Link
      href={href}
      className="mb-2 flex items-center rounded-lg border border-gray-800 bg-transparent px-4 py-2 font-semibold text-gray-800 hover:border-transparent hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      {name === "Live Demo" ? <ExternalLinkIcon /> : <GithubIcon />}
      <div className="ml-1">{name}</div>
    </Link>
  );
}
