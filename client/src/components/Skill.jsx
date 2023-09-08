// import { useParallax } from "react-scroll-parallax";
import { DiJava } from "react-icons/di";
import { BsFillSuitHeartFill } from "react-icons/bs";
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
  //   const orbit1 = useParallax({
  //     rotate: [0, 360],
  //   });
  //   const orbit2 = useParallax({
  //     rotate: [-270, 360],
  //   });
  return (
    <>
      <div className="p-4 w-full flex justify-center items-center">
        {/* <div className="text-rose-500 animate-pulse absolute text-2xl">
          {" "}
          <BsFillSuitHeartFill />{" "}
        </div>
        <div
          ref={orbit2.ref}
          className="spinner p-16 aspect-square border dark:border-gray-800 border-gray-200 rounded-full relative flex justify-center items-center text-white bg-transparent"
        >
          <div className="diamond absolute left-1/2 -top-6 -translate-x-5 text-5xl text-sky-600">
            <SiTailwindcss />
          </div>
          <div className="clown absolute text-5xl text-purple-600 -bottom-7">
            <SiBootstrap />
          </div>
          <div className="money absolute text-3xl bg-cyan-700 p-3 rounded-full -left-7">
            <SiMysql />
          </div>
          <div className="node absolute text-3xl bg-orange-700 p-3 rounded-full -right-7">
            <DiJava />
          </div>
          <div
            ref={orbit1.ref}
            className="spinner p-16 aspect-square border dark:border-gray-800 border-gray-200 rounded-full relative flex justify-center items-center text-white bg-transparent"
          >
            <div className="diamond absolute left-1/2 -top-6 -translate-x-5 text-5xl text-sky-600">
              <SiReact />
            </div>
            <div className="clown absolute text-6xl text-green-600 -bottom-7">
              <SiMongodb />
            </div>
            <div className="money absolute text-3xl bg-gray-900 p-3 rounded-full -left-7">
              <SiExpress />
            </div>
            <div className="node absolute text-3xl bg-green-600 p-3 rounded-full -right-7">
              <SiNodedotjs />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
