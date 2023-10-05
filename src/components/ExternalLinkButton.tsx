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
      className="mb-2 mr-6 flex items-center bg-transparent font-semibold text-gray-900 hover:border-transparent hover:text-green-600"
    >
      {name === "Live Demo" ? <ExternalLinkIcon /> : <GithubIcon />}
      <div className="ml-1">{name}</div>
    </Link>
  );
}
