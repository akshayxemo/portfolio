import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-black font-body">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
