import { useState } from "react";
// import { DarkModeToggle } from "react-dark-mode-toggle-2";
import useDarkSide from "../hooks/useDarkSide";
import { BiSolidMoon, BiSun } from "react-icons/bi";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  // const toggleDarkMode = (checked) => {
  //   setTheme(colorTheme);
  //   setDarkSide(checked);
  // };

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <>
      {darkSide ? (
        <BiSolidMoon
          id="moon"
          className="text-slate-300 hover:text-yellow-500 cursor-pointer text-xl animate-pulse hover:animate-none transition ease-in"
          onClick={toggleDarkMode}
        />
      ) : (
        <BiSun
          id="sun"
          className="text-black cursor-pointer text-xl hover:text-slate-600 animate-spin-one transition ease-in"
          onClick={toggleDarkMode}
        />
      )}
      {/* <DarkModeToggle
        style={{ marginBottom: "2rem" }}
        isDarkMode={darkSide}
        onChange={toggleDarkMode}
        size={40}
      /> */}
    </>
  );
}
