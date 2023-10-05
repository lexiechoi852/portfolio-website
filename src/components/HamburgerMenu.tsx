"use client";

import React, { useState } from "react";
import Link from "next/link";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseIcon from "./icons/CloseIcon";

export default function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!isMenuOpen && (
        <button type="button" onClick={() => setMenuOpen(true)}>
          <HamburgerMenuIcon />
        </button>
      )}
      {isMenuOpen && (
        <div className="relative">
          <button type="button" onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </button>
          <div className="absolute right-0 z-10 flex flex-col text-gray-600">
            <Link href="#experience">
              <button type="button" onClick={() => setMenuOpen(false)}>
                Experience
              </button>
            </Link>
            <Link href="#projects">
              <button type="button" onClick={() => setMenuOpen(false)}>
                Projects
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
