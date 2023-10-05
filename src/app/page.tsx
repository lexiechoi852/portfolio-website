import React from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col p-6">
      <Navbar />
      <div className="flex flex-col">
        <Profile />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
