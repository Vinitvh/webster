import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>Webster &copy; {date}. All rights reserved.</h1>
    </div>
  );
}

export default Footer;
