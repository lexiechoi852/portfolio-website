import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex p-6 text-lg font-bold">
      <Link href="/">Lexie Choi</Link>
      <nav className="ml-auto flex max-w-[300px] flex-1 justify-between">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </header>
  );
}
