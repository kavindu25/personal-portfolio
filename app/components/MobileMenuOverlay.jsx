import React from "react";
import NavLink from "./NavLink";

const MobileMenuOverlay = ({ links }) => {
  return (
    <ul className="z-10 flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenuOverlay;
