import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero />
        <About />
        <BackToTop />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
