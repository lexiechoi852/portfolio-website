import React from "react";

import Link from "next/link";

import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GithubIcon from "./icons/GithubIcon";

import type { JSX } from "react";

interface ExternalLinkButtonProps {
  href: string;
  name: string;
}

const ExternalLinkButton = ({
  href,
  name,
}: ExternalLinkButtonProps): JSX.Element => (
  <Link
    className="mb-2 flex items-center rounded-lg border border-gray-800 bg-transparent px-4 py-2 font-semibold text-gray-800 hover:border-transparent hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300"
    href={href}
  >
    {name === "Live Demo" ? <ExternalLinkIcon /> : <GithubIcon />}
    <div className="ml-1">{name}</div>
  </Link>
);

export default ExternalLinkButton;
