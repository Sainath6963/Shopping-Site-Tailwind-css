import React, { useEffect, useState } from "react";

import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const elements = document.documentElement;
    if (theme === "dark") {
      elements.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elements.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={light}
          alt="Light Mode"
          onClick={() => setTheme("dark")}
          className="w-12 cursor-pointer drop-shodow-md hover:rotate-20 absoute right-0 z-10 "
        />
      ) : (
        <img
          src={dark}
          alt="Dark Mode"
          onClick={() => setTheme("light")}
          className="w-12 cursor-pointer drop-shodow-md hover:rotate-20 absoute right-0 z-10"
        />
      )}
    </div>
  );
};

export default Darkmode;
