import React from "react";

import Image from "next/image";
import Link from "next/link";

import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

import type { JSX } from "react";

const Profile = (): JSX.Element => (
  <section
    className="relative flex min-h-[calc(90dvh)] flex-col justify-center gap-20 lg:flex-row"
    id="profile"
  >
    <div className="flex items-center justify-center">
      <Image
        priority
        alt="Profile Picture"
        className="h-full w-72 rounded-full lg:h-[400px] lg:w-[400px]"
        height={400}
        src="/lexie-choi.png"
        width={400}
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="font-semibold text-gray-600">Hello, I&apos;m</p>
      <h1 className="text-5xl font-bold text-gray-800">Lexie Choi</h1>
      <p className="text-2xl font-semibold text-gray-600">
        Full Stack Developer
      </p>
      <div className="flex gap-2">
        <Link
          className="flex gap-2 rounded-full border border-gray-900 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-900 hover:text-white"
          href="https://github.com/lexiechoi852"
        >
          <GithubIcon />
          <div>Github</div>
        </Link>
        <Link
          className="flex gap-2 rounded-full border border-gray-900 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-900 hover:fill-white hover:text-white"
          href="https://www.linkedin.com/in/lexie-choi"
        >
          <LinkedInIcon />
          <div>LinkedIn</div>
        </Link>
      </div>
    </div>
  </section>
);

export default Profile;
