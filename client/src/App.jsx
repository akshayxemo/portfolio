import "./App.css";
// import Navbar from "./components/navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import BackToTop from "./components/BackToTop";
// import Skill from "./components/Skill";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import socials from "../src/assets/data/socials.json";
import React from "react";
import Router from "./router/router";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights";

function App() {
  inject();
  return (
    <>
      <React.StrictMode>
        <Router />
        <SpeedInsights />
      </React.StrictMode>
      {/* <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero socials={socials} />
        <About />
        <BackToTop />
        <Skill />
        <Projects />
        <Contact socials={socials} />
      </div> */}
    </>
  );
}

export default App;
