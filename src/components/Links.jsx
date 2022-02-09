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
      {navLinks.map(({ url, text }, idx) => (
        <NavLink
          key={idx}
          to={url}
          className="text-blue-700 hover:text-blue-900 hover:underline dark:text-blue-300 pb-2 mr-8"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
