"use client";

import React, { useState } from "react";

import Link from "next/link";

import CloseIcon from "./icons/CloseIcon";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";

import type { JSX } from "react";

const HamburgerMenu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {!isMenuOpen && (
        <button
          aria-label="hamburger menu"
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <HamburgerMenuIcon />
        </button>
      )}
      {isMenuOpen ? (
        <div className="relative">
          <button
            aria-label="close"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <CloseIcon />
          </button>
          <div className="absolute right-0 z-10 flex flex-col text-gray-600">
            <Link href="#experience">
              <button onClick={() => setIsMenuOpen(false)} type="button">
                Experience
              </button>
            </Link>
            <Link href="#projects">
              <button onClick={() => setIsMenuOpen(false)} type="button">
                Projects
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;
