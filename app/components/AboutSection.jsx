"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_VIEW = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li className="py-1">
          Bachelor of Science - BSc, Computer Science(Second Upper Class),
          Informatics Institute of Technology affiliated with University of
          Westminster, UK - 2023
        </li>
        <li className="py-1">
          G.C.E. Advanced Level, Prince of Wales&apos; College, Moratuwa - 2019
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <div className="flex md:flex-row flex-col gap-2  p-1 text-center font-medium">
          <div className="border-2 rounded-3xl md:rounded-l-full border-primary-400 p-3 hover:bg-zinc-900">
            <h6 className="">Programming Languages</h6>
          </div>
          <div className="border-2 border-slate-400 rounded-3xl md:rounded-r-full p-3 hover:bg-zinc-900">
            <p>Python, JavaScript, TypeScript, Java</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 mt-6 md:mt-0 p-1 text-center font-medium">
          <div className="border-2 rounded-3xl md:rounded-l-full border-primary-400 p-3 hover:bg-zinc-900">
            <h6>Frameworks & Libraries</h6>
          </div>
          <div className="border-2 border-slate-400 rounded-3xl md:rounded-r-full p-3 hover:bg-zinc-900">
            <p>
              React JS, React - redux, Next JS, Node JS, Bootstrap CSS, Tailwind
              CSS
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 mt-6 md:mt-0 p-1 text-center font-medium">
          <div className="border-2 rounded-3xl md:rounded-l-full border-primary-400 p-3 hover:bg-zinc-900">
            <h6>Database</h6>
          </div>
          <div className="border-2 border-slate-400 rounded-3xl md:rounded-r-full p-3 hover:bg-zinc-900">
            <p>MySQL, MongoDB</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 mt-6 md:mt-0 p-1 text-center font-medium">
          <div className="border-2 rounded-3xl md:rounded-l-full border-primary-400 p-3 hover:bg-zinc-900">
            <h6>Other Tools</h6>
          </div>
          <div className="border-2 border-slate-400 rounded-3xl md:rounded-r-full p-3 hover:bg-zinc-900">
            <p>Github, Linux, Docker, Strapi </p>
          </div>
        </div>
      </>

      // <ul className="list-disc">
      //   <li>Programming Languages:</li>
      //   <ul className="pb-3 pl-4">
      //     <li>Python</li>
      //     <li>JavaScript</li>
      //     <li>Java</li>
      //     <li>Solidity</li>
      //   </ul>
      //   <li>Frameworks & Libraries:</li>
      //   <ul className=" pb-3 pl-4">
      //     <li>React.js</li>
      //     <li>Next.js</li>
      //     <li>React - redux</li>
      //     <li>Truffle</li>
      //     <li>Bootstrap CSS</li>
      //     <li>Tailwind CSS</li>
      //   </ul>
      //   <li>Database:</li>
      //   <ul className="pb-3 pl-4">
      //     <li>MySQL</li>
      //     <li>MongoDB</li>
      //   </ul>

      //   {/* <li>Solidity</li> */}
      // </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li className="py-1">
          Software Engineer,{" "}
          <a
            href="https://avantrio.xyz/"
            target="_blank"
            className="text-primary-300 hover:text-primary-400 transition-all"
          >
            Avantrio
          </a>{" "}
          - Since November 2024
        </li>
        <li className="py-1">
          Software Engineer (Part Time),{" "}
          <a
            href="https://www.streamrx.co/"
            target="_blank"
            className="text-primary-300 hover:text-primary-400 transition-all"
          >
            StreamRX
          </a>{" "}
          - 3 months
        </li>
        <li className="py-1">
          Associate Software Engineer,{" "}
          <a
            href="https://avantrio.xyz/"
            target="_blank"
            className="text-primary-300 hover:text-primary-400 transition-all"
          >
            Avantrio
          </a>{" "}
          - 1 year 2 months
        </li>
        <li className="py-1">
          Trainee Software Engineer,{" "}
          <a
            href="https://avantrio.xyz/"
            target="_blank"
            className="text-primary-300 hover:text-primary-400 transition-all"
          >
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
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
          transition: { delay: 0 },
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: { delay: 0.6, duration: 0.8 },
        }}
        exit={{
          y: 100,
          transition: { delay: 0 },
        }}
        className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16-"
      >
        {/* <Image
          src="/images/aboutSectionPic.png"
          alt="about me"
          width={500}
          height={500}
        /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            About Me
          </h2>
          <p className="text-base text-center lg:text-lg ">
            I graduated from Informatics Institute of Technology (Aug 2023) with
            a second upper class honours in Bsc(Computer Science). I completed
            my 1 year internship at{" "}
            <a
              href="https://avantrio.xyz/"
              target="_blank"
              className="hover:text-primary-400"
            >
              avantrio.
            </a>{" "}
            I&apos;m proficient in Java, Python and Solidity and front-end
            development using HTML, CSS, and JavaScript frameworks (React/Next)
            for creating responsive, mobile-friendly single page web
            applications as well as backend development using Node JS and
            Django. I am familiar with SQL databases, including hands-on
            experience with MySQL and using Git and GitHub for collaborative
            software development and version control.
            {/* Also, Im eager to stay up-to-date
            with the latest industry trends and technologies, with a dedication
            to continuous learning and improvement. */}
          </p>
          <div className="flex flex-row mt-12 mx-auto">
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
          <div className="mt-8 mx-auto ">
            {TAB_VIEW.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
