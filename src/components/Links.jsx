import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { url: "/search", text: "All" },
  { url: "/images", text: "Images" },
  { url: "/videos", text: "Videos" },
];

function Links() {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {navLinks.map(({ url, text }) => (
        <NavLink
          to={url}
          className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 mr-8"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
