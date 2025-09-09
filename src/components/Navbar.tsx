import React from "react";

import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";

import type { JSX } from "react";

const Navbar = (): JSX.Element => (
  <header className="flex h-[10dvh] items-center text-lg font-bold text-gray-700">
    <Link className="text-2xl" href="/">
      Lexie Choi
    </Link>
    <nav className="ml-auto hidden max-w-[200px] flex-1 justify-between lg:flex">
      <Link aria-label="experience section" href="#experience">
        Experience
      </Link>
      <Link aria-label="projects section" href="#projects">
        Projects
      </Link>
    </nav>
    <nav className="flex flex-1 justify-end lg:hidden">
      <HamburgerMenu />
    </nav>
  </header>
);

export default Navbar;
