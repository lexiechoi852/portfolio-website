import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <header className="flex h-[10dvh] items-center text-lg font-bold text-gray-700">
      <Link href="/" className="text-2xl">
        Lexie Choi
      </Link>
      <nav className="ml-auto hidden max-w-[200px] flex-1 justify-between lg:flex">
        <Link href="#experience" aria-label="experience section">
          Experience
        </Link>
        <Link href="#projects" aria-label="projects section">
          Projects
        </Link>
      </nav>
      <nav className="flex flex-1 justify-end lg:hidden">
        <HamburgerMenu />
      </nav>
    </header>
  );
}
