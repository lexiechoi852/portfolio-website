import React from "react";
import Tag from "./Tag";
import Navigation from "./Navigation";

const experiences = [
  {
    title: "Senior Programmer",
    companyName: "Ricacorp Properties Limited",
    duration: "Jan 2022 - Feb 2023",
    description:
      "I significantly improved website performance, resulting in a 50% increase in the desktop PageSpeed score and doubling the mobile PageSpeed score. Additionally, I achieved substantial monthly cost savings of US $5000 through the optimization of Google Maps APIs. I successfully launched a website and service by leveraging Azure services, including Azure Functions, Azure App Service, and Azure DevOps. Throughout these projects, I collaborated closely with business analysts, ensuring efficient project execution and the timely delivery of products even under demanding timelines.",
    stacks: ["Azure", "TypeScript", "SEO", "Performance Optimization"],
  },
  {
    title: "Web Developer",
    companyName: "Ricacorp Properties Limited",
    duration: "Oct 2020 - Dec 2021",
    description:
      "I have a proven track record of developing and deploying more than 10 scalable websites using Angular and TypeScript, with a focus on optimizing performance through server-side rendering techniques. Simultaneously, I've maintained numerous custom WordPress plugins to ensure seamless user experiences and optimal functionality. My expertise extends to designing and building robust RESTful APIs, employing Node.js, Express.js, and Nest.js to facilitate efficient and reliable communication between applications. I've also played a crucial role in enhancing search engine visibility by implementing an automated sitemap generation mechanism, resulting in improved search rankings and online visibility. Furthermore, I've collaborated closely with designers to seamlessly integrate responsive designs, placing a strong emphasis on delivering an exceptional user experience.",
    stacks: ["Angular", "WorkPress", "SCSS", "Nest.js"],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="relative min-h-[calc(96dvh)] p-[4vh]">
      <h2 className="mb-2 text-center text-5xl font-bold text-gray-700">
        Experience
      </h2>
      <div className="flex flex-col items-center justify-center gap-20">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="flex w-full flex-col lg:flex-row"
          >
            <div className="min-w-[150px]">{experience.duration}</div>
            <div className="flex flex-col lg:ml-20">
              <h3 className="text-2xl font-bold text-gray-800">
                {experience.title}
              </h3>
              <div className="text-xl font-semibold text-gray-800">
                {experience.companyName}
              </div>
              <p className="mt-2 text-gray-800">{experience.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.stacks.map((stack) => (
                  <Tag key={stack} stack={stack} component="experience" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navigation href="#projects" />
    </section>
  );
}
