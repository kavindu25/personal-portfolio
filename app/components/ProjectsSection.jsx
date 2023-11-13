"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Personal portfolio developed using Next.js",
    image: "images/projects/myPortfolio.png",
    tag: ["All", "Web", "Next"],
    gitUrl: "https://github.com/kavindu25/personal-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weatherapp with firebase login",
    image: "images/projects/weatherApp.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kavindu25/react-weatherapp",
    previewUrl: "https://react-weatherapp-gamma.vercel.app/",
  },
  {
    id: 3,
    title: "Food Order App",
    description: "Demo food order app with checkout and forms",
    image: "images/projects/foodOrderApp.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kavindu25/react-food-order-app",
    previewUrl: "https://react-food-order-app-kavindu25.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Next.js Portfolio Website",
  //   description: "My personal portfolio developed using Next.js",
  //   image: "images/projects/myPortfolio.png",
  //   tag: ["All"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsSection;
