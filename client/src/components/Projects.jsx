import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import data from "../assets/data/projects.json";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    setRepos(data);
  }, []);

  console.log(repos);
  return (
    <>
      <div
        id="projects"
        className="w-full dark:bg-gray-500/10 bg-gray-400/10 relative"
      >
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 py-24">
          <div className="text-center dark:text-white mb-10">
            <h1 className="text-3xl font-sans font-semibold mb-1">Projects</h1>
            <p className="text-gray-500">Projects that showcase my skills</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {repos.map((repo, index) => {
              return (
                <ProjectCard
                  key={index + 1}
                  id={index + 1}
                  reponame={repo.reponame}
                  preview={repo.preview}
                  description={repo.description}
                  createdAt={repo.createdAt}
                  updatedAt={repo.updatedAt}
                  homepage={repo.homepage}
                  htmlLink={repo.htmlLink}
                  tags={repo.tags}
                  collaboration={repo.collaboration}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
