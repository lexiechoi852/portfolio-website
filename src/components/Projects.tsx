import React from "react";

import Image from "next/image";

import ExternalLinkButton from "./ExternalLinkButton";
import Navigation from "./Navigation";
import Tag from "./Tag";

import type { JSX } from "react";

import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    name: "Easy Trip",
    image: "/easy-trip-screenshot.png",
    description:
      "Trip planning website allow you plan your trip in Toronto. By adding attractions, arranging your schedule using calendar view, users can get an itinerary with travel time estimation and routes information.",
    // liveSite: "https://easy-trip.lexiechoi.com",
    backendGithubUrl: "https://github.com/lexiechoi852/easy-trip-laravel",
    frontendGithubUrl: "https://github.com/lexiechoi852/easy-trip-next",
    workInProgress: false,
    stacks: ["Next.js", "Redux", "Laravel"],
  },
  {
    name: "Mail Me",
    image: "/mail-me-screenshot.png",
    description:
      "Allows users to write an email to their future self. By answering predefine questions and input email address, an AI generated email will be sent to your email.",
    // liveSite: "https://mail-me.lexiechoi.com",
    backendGithubUrl: "https://github.com/cantek-international/mail-me-express",
    frontendGithubUrl: "https://github.com/cantek-international/mailme",
    workInProgress: false,
    stacks: ["Next.js", "TailwindCSS", "Express.js"],
  },
  {
    name: "Chat App",
    image: "/chat-app-screenshot.png",
    description:
      "Real time chat website allow users to have one-on-one chat and group chat. ",
    // liveSite: "https://chat-app.lexiechoi.com",
    githubUrl: "https://github.com/lexiechoi852/chat-app",
    workInProgress: false,
    stacks: ["React", "Redux", "Nest.js", "Socket.IO", "Mongoose"],
  },
];
const Projects = (): JSX.Element => (
  <section
    className="relative flex min-h-[calc(96dvh)] flex-col gap-10 p-[4vh]"
    id="projects"
  >
    <h2 className="mb-2 text-center text-5xl font-bold text-gray-700">
      Projects
    </h2>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.name}
          className="mx-auto flex h-full max-w-md flex-col rounded-lg border border-gray-200 bg-white shadow"
        >
          <Image
            priority
            alt={`Project ${project.name}`}
            className="rounded-t-lg"
            height={450}
            src={project.image}
            width={450}
          />
          <div className="flex h-full flex-col gap-2 px-5 pb-3 pt-5">
            <div className="flex flex-wrap items-end gap-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {project.name}
              </h3>
              {project.workInProgress ? <span>(Work In Progress)</span> : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack) => (
                <Tag key={stack} component="projects" stack={stack} />
              ))}
            </div>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex h-full items-end">
              <div className="mt-2 flex flex-wrap gap-2">
                {project.liveSite ? (
                  <ExternalLinkButton
                    href={project.liveSite}
                    name="Live Demo"
                  />
                ) : null}
                {project.frontendGithubUrl ? (
                  <ExternalLinkButton
                    href={project.frontendGithubUrl}
                    name="Frontend"
                  />
                ) : null}
                {project.backendGithubUrl ? (
                  <ExternalLinkButton
                    href={project.backendGithubUrl}
                    name="Backend"
                  />
                ) : null}
                {project.githubUrl ? (
                  <ExternalLinkButton href={project.githubUrl} name="Code" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Navigation href="#profile" />
  </section>
);

export default Projects;
