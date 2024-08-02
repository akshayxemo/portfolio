import { DiJava } from "react-icons/di";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiFlutter,
} from "react-icons/si";
import { Fade, Slide } from "react-awesome-reveal";

export default function Skill() {
  return (
    <>
      <div className="w-full dark:text-white">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 pb-28 pt-10 max-xsm:pb-20 w-full">
          <Fade delay={250}>
            <div className="text-center dark:text-white mb-10">
              <h1 className="text-3xl font-sans font-semibold mb-1">
                Tech Stack
              </h1>
              <p className="text-gray-500">Technologies that I know</p>
            </div>
          </Fade>
          <div className="flex flex-wrap justify-center items-center gap-6 text-4xl max-sm:text-3xl max-xxsm:text-2xl">
            {/* .............. Java .............. */}
            <Slide direction={"up"} delay={100}>
              <Fade delay={200}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <DiJava className="text-orange-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>

            {/* .............. React.Js .............. */}
            <Slide direction={"up"} delay={200}>
              <Fade delay={300}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiReact className="text-blue-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. Tailwind Css .............. */}
            <Slide direction={"up"} delay={300}>
              <Fade delay={400}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiTailwindcss className="text-sky-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. Bootstrap .............. */}
            <Slide direction={"up"} delay={400}>
              <Fade delay={500}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiBootstrap className="text-purple-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. Express.Js .............. */}
            <Slide direction={"up"} delay={500}>
              <Fade delay={600}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiExpress className=" hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. Node.Js .............. */}
            <Slide direction={"up"} delay={600}>
              <Fade delay={700}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiNodedotjs className="text-green-600 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. mySql .............. */}
            <Slide direction={"up"} delay={700}>
              <Fade delay={800}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiMysql className="text-indigo-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            {/* .............. mongodb .............. */}
            <Slide direction={"up"} delay={800}>
              <Fade delay={900}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiMongodb className="text-green-500 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
            <Slide direction={"up"} delay={800}>
              <Fade delay={900}>
                <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
                  <SiFlutter className="text-sky-400 hover:scale-105" />
                </div>
              </Fade>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}
