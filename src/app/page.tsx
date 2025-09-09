import React from "react";

import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

import type { JSX } from "react";

const Home = (): JSX.Element => (
  <div className="container mx-auto flex flex-col p-6">
    <Navbar />
    <div className="flex flex-col">
      <Profile />
      <Experience />
      <Projects />
    </div>
  </div>
);

export default Home;
