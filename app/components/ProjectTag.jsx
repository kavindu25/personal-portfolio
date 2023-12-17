import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const btnStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${btnStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
