import { useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import {
  FcAbout,
  FcBriefcase,
  FcGraduationCap,
  //   FcRatings,
} from "react-icons/fc";

export default function About() {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="flex max-sm:flex-col max-w-7xl h-auto mx-auto px-6 max-sm:px-4 pb-20 pt-10 max-sm:pt-0 max-sm:gap-8">
        <div className="dark:text-white text-dark flex flex-col flex-wrap gap-1 w-[40%] max-sm:w-full max-sm:flex-row max-sm:text-sm max-sm:justify-between max-xsm:justify-center">
          <div
            id="about"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "about"
                ? "bg-slate-500/5 border-l-4 border-sky-500 dark:bg-slate-500/10"
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
                ? "bg-slate-500/5 border-l-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("education")}
          >
            <FcGraduationCap className="text-3xl max-xsm:text-xl" />
            Education
          </div>
          {/* <div
            id="internship"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "internship"
                ? "bg-slate-500/5 border-l-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("internship")}
          >
            <FcBriefcase className="text-3xl max-xsm:text-xl" />
            Internships
          </div> */}
          <div
            d="experience"
            className={`p-4 cursor-pointer rounded-md hover:bg-slate-500/5 flex max-sm:flex-col items-center gap-4 ${
              active === "experience"
                ? "bg-slate-500/5 border-l-4 border-sky-500 dark:bg-slate-500/10"
                : "border-b border-slate-500/10"
            }`}
            onClick={() => setActive("experience")}
          >
            {/* <FcRatings className="text-3xl max-xsm:text-xl" /> */}
            <FcBriefcase className="text-3xl max-xsm:text-xl" />
            Experience
          </div>
        </div>
        <div className="w-[60%] max-sm:w-full px-6 py-4">
          <div className="dark:text-white text-black text-center flex flex-col gap-2 items-center px-8 max-xxsm:px-2">
            <BiSolidQuoteLeft className="text-8xl max-sm:text-5xl opacity-10" />
            <p className="leading-[30px] text-xl max-sm:text-lg max-xxsm:text-sm max-xxsm:leading-6">
              {`Hello, I'm Akshay Kumar Das, a joyful, cheerful, and enthusiastic
              individual with a passion for creating and learning. I thrive on
              building innovative solutions and exploring new technologies. My
              love for creativity extends to graphic design, where I enjoy
              crafting visually appealing and impactful designs.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
