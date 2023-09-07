import { useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FcAbout, FcBriefcase, FcGraduationCap } from "react-icons/fc";
import Education from "./Education";
import Edu from "../assets/data/education.json";
import AboutText from "../assets/data/about.json";

export default function About() {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="flex max-sm:flex-col max-w-7xl h-auto mx-auto px-6 max-sm:px-4 pb-20 pt-10 max-sm:pt-0 max-sm:gap-8">
        <div className="dark:text-white text-dark flex flex-col flex-wrap gap-1 w-[40%] max-sm:w-full max-sm:flex-row max-sm:text-sm max-sm:justify-between max-xsm:justify-center font-sans">
          <div
            id="about"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "about"
                ? "bg-slate-500/5 border-l-4 max-sm:border-l-0 max-sm:border-b-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("about")}
          >
            <FcAbout className="text-3xl max-xsm:text-xl" />
            <p>About Me</p>
          </div>
          <div
            id="education"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "education"
                ? "bg-slate-500/5 border-l-4 max-sm:border-l-0 max-sm:border-b-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("education")}
          >
            <FcGraduationCap className="text-3xl max-xsm:text-xl" />
            Education
          </div>
          <div
            d="experience"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "experience"
                ? "bg-slate-500/5 border-l-4 max-sm:border-l-0 max-sm:border-b-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("experience")}
          >
            {/* <FcRatings className="text-3xl max-xsm:text-xl" /> */}
            <FcBriefcase className="text-3xl max-xsm:text-xl" />
            Experience
          </div>
        </div>
        <div className="w-[60%] h-[30rem] overflow-y-auto max-sm:w-full px-6 py-4">
          {active === "about" ? (
            <div className="dark:text-white text-black text-center flex flex-col gap-2 items-center px-8 max-xxsm:px-2">
              <BiSolidQuoteLeft className="text-8xl max-sm:text-5xl dark:opacity-20 opacity-10" />
              <p className="leading-[30px] text-xl max-sm:text-lg max-xxsm:text-sm max-xxsm:leading-6">
                {AboutText.about}
              </p>
            </div>
          ) : active === "education" ? (
            Edu.map((item) => {
              return (
                <Education
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  from={item.from}
                  year={item.year}
                  marks={item.marks}
                  status={item.status}
                />
              );
            })
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
