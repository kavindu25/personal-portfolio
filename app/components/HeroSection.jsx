"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kavindu",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A CS Graduate",
                1000,
                "A Software Engineer",
                1000,
                "A Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hello I&apos;m Kavindu! I&apos;m a recent{" "}
            <span className="text-white">computer science</span> graduate with{" "}
            <span className="text-white">1 year internship experience.</span> I
            enjoy building web applications using
            <span className="text-white"> React and Next.js.</span>
          </p>
          <div className="">
            <a href="mailto:kavindudealwis@gmail.com">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                Contact me
              </button>
            </a>
            <a href="/Kavindu_de_Alwis_Resume.pdf" download>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-12 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/heroSectionGray.png"
              alt="hero image"
              className="absolute translate -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
