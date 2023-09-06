import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
