import demoImg from "../assets/demo.png";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { format, parseISO } from "date-fns";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { MdClose } from "react-icons/md";
import { Zoom } from "react-awesome-reveal";

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  reponame: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  htmlLink: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  collaboration: PropTypes.bool,
};
export default function ProjectCard({
  id,
  reponame,
  preview,
  description = "",
  createdAt,
  updatedAt,
  homepage,
  htmlLink,
  tags,
  collaboration,
}) {
  function openModal() {
    document.getElementById(`open-about-${id}`).classList.remove("hidden");
    document.getElementById(`open-about-${id}`).classList.add("flex");
    document.body.classList.add("overflow-hidden");
  }

  function closeModal() {
    document.getElementById(`open-about-${id}`).classList.add("hidden");
    document.getElementById(`open-about-${id}`).classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
    // window["open-about"]?.close();
  }
  return (
    <>
      <div className="max-w-[100%]" id={id}>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto max-w-lg h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {reponame}{" "}
              {collaboration && (
                <span className="text-sm text-orange-600">Collaboration</span>
              )}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              {description.length > 100 ? (
                <>
                  {`${description.slice(0, 99)} ... `}
                  <span
                    className="cursor-pointer text-cyan-500 hover:text-cyan-300"
                    onClick={openModal}
                  >
                    Read more.
                  </span>
                </>
              ) : (
                description
              )}
            </CardItem>
            <CardItem
              translateZ="100"
              height="1000"
              width="1000"
              className="w-full mt-4 bg-cover overflow-hidden aspect-video bg-black relative rounded-xl dark:border-white/[0.1] border"
            >
              <img
                src={preview == "" ? demoImg : preview}
                height="1000"
                width="1000"
                className="group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-6 dark:text-neutral-300"
            >
              {format(parseISO(createdAt), "MMM d, yyyy")} -{" "}
              {format(parseISO(updatedAt), "MMM d, yyyy")}
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-1 justify-start items-center gap-2">
                <CardItem
                  translateZ={20}
                  as="a"
                  // onClick={()=>{}}
                  href={htmlLink}
                  target="__blank"
                  className="px-6 py-3 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-semibold flex gap-3 cursor-pointer"
                >
                  <FaGithub /> Github
                </CardItem>
                <button
                  // translateZ={20}
                  // as="button"
                  onClick={openModal}
                  className="px-6 py-3 rounded-md bg-white dark:bg-black dark:text-white text-black text-sm font-normal flex gap-3 border-[0.2px] dark:border-gray-600 border-gray-500 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"
                >
                  View details
                </button>
              </div>
              {homepage && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={homepage}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white dark:hover:text-cyan-500"
                >
                  Check now →
                </CardItem>
              )}
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Details Modal ........................... */}
      <div
        id={`open-about-${id}`}
        role="dialog"
        className="hidden w-full h-full bg-black/40 backdrop-blur-md z-[9999] fixed top-0 right-0 border-none focus:border-none focus-visible:border-none border-0 m-0 overflow-hidden justify-center items-center"
      >
        <Zoom
          triggerOnce
          duration={400}
          className="text-white lg:w-[40%] w-full m-4 bg-gray-800 rounded-lg p-6"
        >
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">{reponame}</h1>
              <MdClose
                onClick={closeModal}
                className="text-2xl hover:text-white text-slate-500 cursor-pointer"
              />
            </div>
            <div className="overflow-y-auto mt-3">
              <p className="">{description}</p>
              <div
                height="1000"
                width="1000"
                className="w-full mt-4 bg-cover overflow-hidden aspect-video bg-black relative rounded-xl dark:border-white/[0.1] border"
              >
                <img
                  src={preview == "" ? demoImg : preview}
                  height="1000"
                  width="1000"
                  className="group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="text-neutral-500 text-sm dark:text-neutral-300 w-full mt-5">
                {tags.length ? (
                  <div className="flex flex-wrap gap-3 items-center">
                    {tags.map((tag, index) => {
                      return (
                        <span
                          className="rounded-full py-1 px-4 border"
                          key={index}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex flex-1 justify-start items-center gap-2">
                  <a
                    href={htmlLink}
                    target="__blank"
                    className="px-6 py-3 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-semibold flex gap-3 cursor-pointer"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
                {homepage && (
                  <a
                    href={homepage}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white dark:hover:text-cyan-500"
                  >
                    Check now →
                  </a>
                )}
              </div>
            </div>
          </div>
        </Zoom>
      </div>
      {/* Details Modal ........................... */}
    </>
  );
}
