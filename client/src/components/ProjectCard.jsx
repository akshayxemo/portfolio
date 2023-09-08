import demoImg from "../assets/demo.png";
import MiniTag from "./MiniTags";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { format, parseISO } from "date-fns";

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  reponame: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  htmlLink: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
export default function ProjectCard({
  id,
  reponame,
  preview,
  description,
  createdAt,
  updatedAt,
  homepage,
  htmlLink,
  tags,
}) {
  return (
    <>
      <div
        id={id}
        className="max-w-lg border-[0.5px] dark:border-gray-600/40 dark:bg-transparent bg-white border-gray-600/25 rounded-lg flex flex-col dark:text-white overflow-hidden grow"
      >
        <div className="bg-cover overflow-hidden aspect-video bg-black relative">
          <img
            src={preview == "" ? demoImg : preview}
            alt=""
            className="scale-100 hover:scale-105 transition ease-in"
          />
        </div>
        <div className="p-6 flex flex-col justify-between grow">
          <div>
            <h1 className="text-2xl mb-4 font-bold">{reponame}</h1>
            <p className="text-sm text-gray-500 mb-5">{description}</p>
          </div>
          <div>
            <div className="border-t-[0.5px] dark:border-gray-600/40 border-gray-600/25 pt-5">
              <div className="flex flex-wrap mb-5 gap-3 items-center justify-between">
                {tags.length != 0 ? (
                  <div className="flex flex-wrap gap-3 items-center">
                    {tags.map((tag, index) => {
                      return <MiniTag key={index} Text={tag} />;
                    })}
                  </div>
                ) : (
                  ""
                )}
                <p className="text-sm italic text-gray-500">
                  {format(parseISO(createdAt), "MMM d, yyyy")} -{" "}
                  {format(parseISO(updatedAt), "MMM d, yyyy")}
                </p>
              </div>

              <div className="flex flex-wrap w-full gap-4">
                <a
                  href={htmlLink}
                  target="blank"
                  className="p-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 grow flex justify-center items-center gap-3"
                >
                  <FaGithub /> Github
                </a>
                {homepage && (
                  <a
                    href={homepage}
                    target="blank"
                    className="p-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 text-green-600 grow flex justify-center items-center gap-3"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
