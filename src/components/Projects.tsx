import React from "react";
import Image from "next/image";
import ExternalLinkButton from "./ExternalLinkButton";
import Tag from "./Tag";
import Navigation from "./Navigation";

const projects = [
  {
    name: "Easy Trip",
    image: "/easy-trip-screenshot.png",
    description:
      "Trip planning website allow you plan your trip in Toronto. By adding attractions, arranging your schedule using calendar view.",
    liveSite: "https://easy-trip-next.vercel.app",
    backendGithubUrl: "https://github.com/lexiechoi852/easy-trip-nest",
    frontendGithubUrl: "https://github.com/lexiechoi852/easy-trip-next",
    githubUrl: "",
    workInProgress: true,
    stacks: ["Next.js", "Redux", "Nest.js"],
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex h-[96vh] flex-col gap-10 p-[4vh]"
    >
      <h4 className="mb-2 text-center text-5xl font-bold text-gray-700">
        Projects
      </h4>
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
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  {project.name}
                </h5>
                {project.workInProgress ? (
                  <span>(Work In Progress)</span>
                ) : null}
              </div>
              <p className="text-gray-700">{project.description}</p>
              <div className="my-2 flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <Tag key={stack} stack={stack} component="projects" />
                ))}
              </div>
              <div className="flex flex-wrap">
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
        ))}
      </div>
      <Navigation href="#profile" />
    </section>
  );
}
