import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero />
        <About />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
