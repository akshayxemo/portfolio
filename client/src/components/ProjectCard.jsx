import demoImg from "../assets/demo.png";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { format, parseISO } from "date-fns";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
							{description.length > 100
								? description.slice(0, 99)
								: description}
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
						{/* <CardItem
							as="div"
							translateZ="60"
							className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
						>
							{tags.length != 0 ? (
								<div className="flex flex-wrap gap-3 items-center">
									{tags.map((tag, index) => {
										return <MiniTag key={index} Text={tag} />;
									})}
								</div>
							) : (
								""
							)}
						</CardItem> */}
						<div className="flex justify-between items-center mt-4">
							<CardItem
								translateZ={20}
								as="a"
								// onClick={()=>{}}
								href={htmlLink}
								target="__blank"
								className="px-6 py-3 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-bold flex gap-3 cursor-pointer"
							>
								<FaGithub /> Github
							</CardItem>
							{homepage && (
								<CardItem
									translateZ={20}
									as="a"
									href={homepage}
									target="__blank"
									className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
								>
									Check now →
								</CardItem>
							)}
						</div>
					</CardBody>
				</CardContainer>
				{/* <div
              id={id}
              className="max-w-lg border-[0.5px] dark:border-gray-600/40 dark:bg-transparent bg-white dark:bg-black border-gray-600/25 rounded-lg dark:text-white overflow-hidden flex flex-col grow"
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
                  <h1 className="text-2xl mb-4 font-bold">
                    {reponame}{" "}
                    {collaboration && (
                      <span className="text-sm text-orange-600">
                        Collaboration
                      </span>
                    )}
                  </h1>
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
            </div> */}
			</div>
		</>
	);
}
