import demoImg from "../assets/demo.png";
import MiniTag from "./MiniTags";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

ProjectCard.propTypes = {
  text: PropTypes.string,
};
export default function ProjectCard({ text }) {
  return (
    <>
      <div className="max-w-lg border-[0.5px] dark:border-gray-600/40 dark:bg-transparent bg-white border-gray-600/25 rounded-lg flex flex-col dark:text-white overflow-hidden grow">
        <div className="bg-cover overflow-hidden aspect-auto relative">
          <img
            src={demoImg}
            alt=""
            className="scale-100 hover:scale-105 transition ease-in"
          />
        </div>
        <div className="p-6 flex flex-col justify-between grow">
          <div>
            <h1 className="text-2xl mb-4 font-bold">Intervu-Me-Web</h1>
            <p className="text-sm text-gray-500 mb-5">{text}</p>
          </div>
          <div>
            <div className="border-t-[0.5px] dark:border-gray-600/40 border-gray-600/25 pt-5">
              <div className="flex flex-wrap mb-5 gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-3 items-center">
                  <MiniTag />
                  <MiniTag />
                  <MiniTag />
                </div>
                <p className="text-sm text-right italic text-gray-500">
                  april 14, 2023 - may 14, 2023
                </p>
              </div>

              <div className="flex flex-wrap w-full gap-4">
                <button className="p-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 grow flex justify-center items-center gap-3">
                  <FaGithub /> Github
                </button>
                <button className="p-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 text-green-600 grow flex justify-center items-center gap-3">
                  <FiExternalLink /> Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
