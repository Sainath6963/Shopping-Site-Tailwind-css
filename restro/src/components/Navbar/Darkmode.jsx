import React from "react";
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";
const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const elements = document.documentElement;

  React.useEffect(() => {
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
      <img
        src={light}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-md hover:rotate-20 transition-all duration-300 absolute right-0 z-10${
          theme === "dark"
        }`}
      />
      <img
        src={dark}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-md hover:rotate-20`}
      />
    </div>
  );
};

export default Darkmode;
