"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    name: "Projects",
    value: 10,
    postfix: "+",
  },
  {
    name: "Awards",
    value: 10,
    postfix: "+",
    postfix: "+",
  },
  {
    name: "Github contributions",
    value: 700,
    prefix: "~",
  },
  {
    name: "Years",
    value: 2,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col justify-center mx-4">
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  //locale="en-us"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                 {achievement.postfix} 
              </h2>
              <p className="text-[#ADB7BE] text-base ">{achievement.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
