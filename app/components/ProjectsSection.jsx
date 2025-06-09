"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "reFile",
    description: "A webapp to transform file names and download as a zip file.",
    image: "images/projects/reFile.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kavindu25/refile",
    previewUrl: "https://refile-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Food Order App",
    description: "Demo food order app with checkout and forms.",
    image: "images/projects/foodOrderApp.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kavindu25/react-food-order-app",
    previewUrl: "https://react-food-order-app-kavindu25.vercel.app/",
  },
  {
    id: 3,
    title: "Next.js Travel App Landing Page",
    description: "Responsive landing page for a travel app.",
    image: "images/projects/travelApp.png",
    tag: ["All", "Web", "Next"],
    gitUrl: "https://github.com/kavindu25/nextjs-travel-app",
    previewUrl: "https://nextjs-travel-app-kavindu25.vercel.app/",
  },
  {
    id: 4,
    title: "3D T-shirt Customizer",
    description: "3D t-shirt customizer using three.js library.",
    image: "images/projects/shirtCustomizer.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kavindu25/3d-tshirt-customizer",
    previewUrl: "https://3d-tshirt-customizer.vercel.app/",
  },
  {
    id: 5,
    title: "Anime Hub",
    description: "Next 14 App with server actions and infinite scroll.",
    image: "images/projects/animeHub.png",
    tag: ["All", "Web", "Next"],
    gitUrl: "https://github.com/kavindu25/anime-hub",
    previewUrl: "https://anime-hub-xi.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "E-commerce App - WIP",
  //   description: "Next 14 E-commerce clone - WIP ",
  //   image: "images/projects/ecommerceApp.png",
  //   tag: ["All", "Web", "Next"],
  //   gitUrl: "https://github.com/kavindu25/nextjs-ecommerce-clone",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "MERN Stack Book Manager App",
    description: "Fullstack(MERN) application for managing books.",
    image: "images/projects/bookManager.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kavindu25/mern-book-store-app",
    previewUrl: "https://mern-book-store-app.vercel.app/",
  },
  // {
  //   id: 1,
  //   title: "Next.js Portfolio Website",
  //   description: "Personal portfolio developed using Next.js.",
  //   image: "images/projects/myPortfolio.png",
  //   tag: ["All", "Web", "Next"],
  //   gitUrl: "https://github.com/kavindu25/personal-portfolio",
  //   previewUrl: "/",
  // },
  // {
  //   id: 2,
  //   title: "Weather App",
  //   description: "Weatherapp with firebase login.",
  //   image: "images/projects/weatherApp.png",
  //   tag: ["All", "Web", "React"],
  //   gitUrl: "https://github.com/kavindu25/react-weatherapp",
  //   previewUrl: "https://react-weatherapp-gamma.vercel.app/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  

  return (
    <section id="projects">
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
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Vite"
          isSelected={tag === "Vite"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              key={index}
              variants={cardVarients}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{duration:0.3, delay:index*0.4}}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
