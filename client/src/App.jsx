import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
function App() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-slate-950 font-body">
        <Navbar />
        <div className="w-[1280px] h-auto mx-auto px-5">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
