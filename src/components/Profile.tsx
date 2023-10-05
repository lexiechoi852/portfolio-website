import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative flex h-[90vh] flex-col justify-center gap-20 lg:flex-row"
    >
      <div className="flex items-center justify-center">
        <Image
          className="h-full w-72 rounded-full lg:h-[400px] lg:w-[400px]"
          src="/lexie-choi.png"
          alt="Profile Picture"
          width={400}
          height={400}
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
            href="https://github.com/lexiechoi852"
            className="flex gap-2 rounded-full border border-gray-900 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-900 hover:text-white"
          >
            <GithubIcon />
            <div>Github</div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/lexie-choi"
            className="flex gap-2 rounded-full border border-gray-900 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-900 hover:fill-white hover:text-white"
          >
            <LinkedInIcon />
            <div>LinkedIn</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
