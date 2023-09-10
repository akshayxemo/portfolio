import { DiJava } from "react-icons/di";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
export default function Skill() {
  return (
    <>
      <div className="w-full dark:text-white">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 pb-24 pt-8 max-xsm:pb-20 w-full">
          <div className="text-center dark:text-white mb-10">
            <h1 className="text-3xl font-sans font-semibold mb-1">
              Tech Stack
            </h1>
            <p className="text-gray-500">Technologies that I know</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-4xl max-sm:text-3xl max-xxsm:text-2xl">
            {/* .............. Java .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <DiJava className="text-orange-500 hover:scale-105" />
            </div>
            {/* .............. React.Js .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiReact className="text-blue-500 hover:scale-105" />
            </div>
            {/* .............. Tailwind Css .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiTailwindcss className="text-sky-500 hover:scale-105" />
            </div>
            {/* .............. Bootstrap .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiBootstrap className="text-purple-500 hover:scale-105" />
            </div>
            {/* .............. Express.Js .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiExpress className=" hover:scale-105" />
            </div>
            {/* .............. Node.Js .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiNodedotjs className="text-green-600 hover:scale-105" />
            </div>
            {/* .............. mySql .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiMysql className="text-indigo-500 hover:scale-105" />
            </div>
            {/* .............. mongodb .............. */}
            <div className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl">
              <SiMongodb className="text-green-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
