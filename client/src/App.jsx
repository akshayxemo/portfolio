import "./App.css";
import React, { useEffect } from "react";
import Router from "./router/router";
import { inject } from "@vercel/analytics";
import useDarkSide from "./hooks/useDarkSide";

function App() {
  inject();
  const [colorTheme, setTheme] = useDarkSide();
  useEffect(() => {
    if (colorTheme === "light") {
      localStorage.setItem("theme", "dark");
    }
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </>
  );
}

export default App;
