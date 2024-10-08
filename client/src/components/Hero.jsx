import profileImg2 from "../assets/ProfilePic-design.jpg";
import bgImg from "../assets/docs@tinypng.d9e4dcdc.png";
import bgGlow from "../assets/docs-dark@tinypng.1bbe175e.png";
import resumeLink from "../assets/data/resumeLink.json";
// import PropTypes from "prop-types";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import SocialNetwork from "./shared/SocialNetwork";
import { Link } from "react-router-dom";

export default function Hero() {
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
            <Fade triggerOnce>
              <Slide direction={"up"} triggerOnce>
                <p className="text-slate-500 sm:text-lg text-base tracking-wider font-sans">
                  Hey there 👋
                </p>
              </Slide>
            </Fade>
            <div className="mt-5">
              <Fade triggerOnce>
                <Slide direction={"up"} delay={100} triggerOnce>
                  <h1 className="dark:text-white text-slate-950 font-sans font-semibold text-5xl max-sm:text-3xl tracking-tight">
                    {`I'm`} Akshay Kumar Das
                  </h1>
                </Slide>
              </Fade>
              <Fade delay={200} triggerOnce>
                <p className="text-slate-500 mt-3 sm:text-lg text-sm">
                  {"MCA' 24"} &nbsp;|&nbsp; Fullstack Web Developer
                  &nbsp;|&nbsp; Android Developer &nbsp;|&nbsp; Graphics
                  Designer
                </p>
              </Fade>

              <SocialNetwork />

              <div className="flex gap-4 items-center mt-10 justify-start max-sm:justify-center max-sm:w-full">
                <Slide direction={"left"} triggerOnce>
                  <Fade delay={300} triggerOnce>
                    <Link
                      to={resumeLink.link}
                      target="blank"
                      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      Check my CV
                    </Link>
                  </Fade>
                </Slide>
              </div>
            </div>
          </div>
          <Zoom triggerOnce>
            <div>
              <img
                src={profileImg2}
                alt=""
                className="h-64 rounded-full aspect-square border-2 border-indigo-500 glow-indigo max-md:mb-10 max-sm:h-48"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}
