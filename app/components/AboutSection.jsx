"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_VIEW = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Science - BSc, Computer Science(Second Upper Class),
          Informatics Institute of Technology affiliated with University of
          Westminster, UK - 2023
        </li>
        <li>
          G.C.E. Advanced Level, Prince of Wales&apos; College, Moratuwa - 2018
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MySQL</li>
        {/* <li>Solidity</li> */}
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Associate Software Engineer,{" "}
          <a href="https://exeve.global/" target="_blank" className="text-primary-300 hover:text-primary-400">
            Exeve
          </a>{" "}
          - 2 months
        </li>
        <li>
          Trainee Software Engineer,{" "}
          <a href="https://avantrio.xyz/" target="_blank" className="text-primary-300 hover:text-primary-400">
            Avantrio
          </a>{" "}
          - 1 year
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => [
    startTransition(() => {
      setTab(id);
    }),
  ];
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16-">
        <Image
          src="/images/aboutSectionPic.png"
          alt="about me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I recently graduated from Informatics Institute of Technology with a
            second upper class honours in Bsc(Computer Science). I completed my
            1 year internship at{" "}
            <a href="https://avantrio.xyz/" target="_blank" className="hover:text-primary-400">
              avantrio.
            </a>{" "}
            I&apos;m proficient in Java, Python and Solidity and front-end
            development using HTML, CSS, and JavaScript frameworks (React/Next)
            for creating responsive and user-friendly web applications. I am
            familiar with SQL databases, including hands-on experience with
            MySQL and using Git and GitHub for collaborative software
            development and version control. Also, Im eager to stay up-to-date
            with the latest industry trends and technologies, with a dedication
            to continuous learning and improvement.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_VIEW.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
