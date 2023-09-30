import {
  FaEye,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import profileImg2 from "../assets/ProfilePic-design.jpg";
import "../assets/css/Hero.css";
import bgImg from "../assets/docs@tinypng.d9e4dcdc.png";
import bgGlow from "../assets/docs-dark@tinypng.1bbe175e.png";
import resumeLink from "../assets/data/resumeLink.json";
import PropTypes from "prop-types";

Hero.propTypes = {
  socials: PropTypes.object.isRequired,
};

export default function Hero({ socials }) {
  return (
    <>
      <div className={` w-full h-auto overflow-hidden relative`}>
        <div
          className={`max-w-7xl h-auto mx-auto px-6 pb-40 pt-48 flex flex-row flex-wrap-reverse gap-5 justify-around items-center max-sm:py-32`}
        >
          <img
            src={bgImg}
            alt=""
            className="absolute w-full top-0 h-full opacity-20"
          />
          <img
            src={bgGlow}
            alt=""
            className="absolute w-full top-0 h-full opacity-70"
          />
          <div className="z-10 max-sm:flex max-sm:items-center max-sm:text-center max-sm:flex-col">
            <p className="text-slate-500 text-lg tracking-wider font-sans">
              Hola Welcome 👋
            </p>
            <div className="mt-5">
              <h1 className="dark:text-white text-slate-950 font-sans font-semibold text-5xl max-sm:text-4xl tracking-tight">
                {`I'm`} Akshay Kumar Das
              </h1>
              <p className="text-slate-500 mt-3">
                Pursuing {"MCA' 24"} &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp;
                Graphics Designer
              </p>
              <div className="socials flex flex-row mt-5 gap-3 max-sm:justify-center">
                {socials.linkedin !== "" ? (
                  <a
                    href={socials.linkedin}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-blue-800 hover:text-white hover:border-blue-800 dark:hover:bg-blue-800 transition hover:ease-in delay-100"
                  >
                    <FaLinkedinIn />
                  </a>
                ) : (
                  ""
                )}

                {socials.twitter !== "" ? (
                  <a
                    href={socials.twitter}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-sky-500 hover:text-white hover:border-sky-500 dark:hover:bg-sky-500 transition hover:ease-in delay-100"
                  >
                    <FaTwitter />
                  </a>
                ) : (
                  ""
                )}

                {socials.instagram !== "" ? (
                  <a
                    href={socials.instagram}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-rose-600 hover:text-white hover:border-rose-600 dark:hover:bg-rose-600 transition hover:ease-in delay-100"
                  >
                    <FaInstagram />
                  </a>
                ) : (
                  ""
                )}

                {socials.github !== "" ? (
                  <a
                    href={socials.github}
                    target="blank"
                    className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-slate-600 hover:text-white hover:border-slate-600 dark:hover:bg-slate-600 transition hover:ease-in delay-100"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="flex gap-4 items-center mt-10 justify-start max-sm:justify-center max-sm:w-full">
                <div className="w-40 h-12 p-[0.15rem] rounded-full gradient-border transition ease-in-out delay-100 hover:scale-105">
                  <a
                    href={resumeLink.link}
                    target="blank"
                    className="w-full h-full dark:bg-black dark:text-white text-slate-950 bg-white rounded-full cursor-pointer flex justify-center items-center gap-3"
                  >
                    <FaEye /> My Resume{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={profileImg2}
              alt=""
              className="h-64 rounded-full aspect-square border-2 border-purple-500 glow-purple max-md:mb-10 max-sm:h-48"
            />
          </div>
        </div>
      </div>
    </>
  );
}
