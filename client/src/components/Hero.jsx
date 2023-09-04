import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import profileImg from "../assets/ProfilePic-design201.jpg";

export default function Hero() {
  return (
    <>
      <div className="w-full py-32 flex flex-row flex-wrap-reverse gap-5 justify-around items-center">
        <div>
          <p className="text-slate-500 text-lg tracking-wider font-sans">
            Hola Welcome 👋
          </p>
          <div className="mt-5">
            <h1 className="dark:text-white text-slate-950 font-sans font-semibold text-5xl tracking-tight">
              {`I'm`} Akshay Kumar Das
            </h1>
            <p className="text-slate-500 mt-3">
              Pursuing {"MCA' 24"} &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp;
              Graphics Designer
            </p>
            <div className="socials flex flex-row mt-5 gap-3">
              <a
                href="https://www.linkedin.com/in/akshay-kumar-das-945405240"
                target="blank"
                className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-blue-800 hover:text-white hover:border-blue-800 dark:hover:bg-blue-800 transition hover:ease-in delay-100"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/yahska_ad"
                target="blank"
                className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-sky-500 hover:text-white hover:border-sky-500 dark:hover:bg-sky-500 transition hover:ease-in delay-100"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/_yahska_ad_"
                target="blank"
                className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-rose-600 hover:text-white hover:border-rose-600 dark:hover:bg-rose-600 transition hover:ease-in delay-100"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/akshayxemo"
                target="blank"
                className="p-3 aspect-square rounded-full cursor-pointer bg-white border border-slate-500 text-slate-800 dark:bg-slate-800/60 dark:text-white dark:border-none hover:bg-slate-600 hover:text-white hover:border-slate-600 dark:hover:bg-slate-600 transition hover:ease-in delay-100"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src={profileImg}
            alt=""
            className="h-64 rounded-full aspect-square"
          />
        </div>
      </div>
    </>
  );
}
