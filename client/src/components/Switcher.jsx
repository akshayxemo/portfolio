import { useState } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeToggle
        style={{ marginBottom: "2rem" }}
        isDarkMode={darkSide}
        onChange={toggleDarkMode}
        size={40}
      />
    </>
  );
}
