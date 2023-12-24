import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import ExternalLinkButton from "./ExternalLinkButton";
import Tag from "./Tag";
import Navigation from "./Navigation";

const projects: Project[] = [
  {
    name: "Easy Trip",
    image: "/easy-trip-screenshot.png",
    description:
      "Trip planning website allow you plan your trip in Toronto. By adding attractions, arranging your schedule using calendar view, users can get an itinerary with travel time estimation and routes information.",
    liveSite: "https://easy-trip.lexiechoi.com",
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
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-[calc(96dvh)] flex-col gap-10 p-[4vh]"
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
              className="rounded-t-lg"
              src={project.image}
              width={450}
              height={450}
              alt={`Project ${project.name}`}
            />
            <div className="flex h-full flex-col gap-2 px-5 pb-3 pt-5">
              <div className="flex flex-wrap items-end gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {project.name}
                </h3>
                {project.workInProgress ? (
                  <span>(Work In Progress)</span>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <Tag key={stack} stack={stack} component="projects" />
                ))}
              </div>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex h-full items-end">
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.liveSite && (
                    <ExternalLinkButton
                      name="Live Demo"
                      href={project.liveSite}
                    />
                  )}
                  {project.frontendGithubUrl && (
                    <ExternalLinkButton
                      name="Frontend"
                      href={project.frontendGithubUrl}
                    />
                  )}
                  {project.backendGithubUrl && (
                    <ExternalLinkButton
                      name="Backend"
                      href={project.backendGithubUrl}
                    />
                  )}
                  {project.githubUrl && (
                    <ExternalLinkButton name="Code" href={project.githubUrl} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navigation href="#profile" />
    </section>
  );
}
