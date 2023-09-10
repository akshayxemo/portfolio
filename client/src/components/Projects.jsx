import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
// import { Octokit } from "octokit";
import data from "../assets/data/projects.json";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    setRepos(data);
  }, []);
  // const token = import.meta.env.GIT_API_KEY;
  // const [repos, setRepos] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   // Function to extract the first image URL from Markdown content
  //   function extractFirstImageFromMarkdown(markdownContent) {
  //     const regex = /!\[.*?\]\((https:\/\/github\.com\/[^)]+)\)/;
  //     const match = markdownContent.match(regex);
  //     return match ? match[1] : "";
  //   }

  //   // const octokit = new Octokit({
  //   //   auth: token,
  //   // });
  //   const octokit = new Octokit();

  //   octokit
  //     .request("GET /rate_limit", {
  //       headers: {
  //         "X-GitHub-Api-Version": "2022-11-28",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setError(
  //         `API limit: ${response.data.rate.limit}, Remaining: ${response.data.rate.remaining}`
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   octokit
  //     .request("GET /users/{owner}/starred", {
  //       owner: "akshayxemo",
  //     })
  //     .then((result) => {
  //       const starredRepos = result.data.filter(
  //         (repo) => repo.owner.login === "akshayxemo"
  //       );
  //       // console.log(starredRepos);
  //       starredRepos.sort(
  //         (a, b) => new Date(b.created_at) - new Date(a.created_at)
  //       );
  //       for (const repo of starredRepos) {
  //         octokit
  //           .request("GET /repos/{owner}/{repo}/readme", {
  //             owner: repo.owner.login,
  //             repo: repo.name,
  //           })
  //           .then((readmeResponse) => {
  //             const readmeContent = atob(readmeResponse.data.content);
  //             // console.log(readmeResponse);
  //             const firstImageUrl =
  //               extractFirstImageFromMarkdown(readmeContent);

  //             const newRepo = {
  //               id: repo.id,
  //               reponame: repo.name,
  //               preview: firstImageUrl,
  //               description: repo.description,
  //               createdAt: repo.created_at,
  //               updatedAt: repo.updated_at,
  //               homepage: repo.homepage,
  //               htmlLink: repo.html_url,
  //               tags: repo.topics,
  //             };
  //             // addNewRepo(newRepo);
  //             console.log("repo");
  //             console.log(repos);
  //             setRepos((prevRepos) => {
  //               if (!prevRepos.some((repo) => repo.id === newRepo.id)) {
  //                 return [...prevRepos, newRepo];
  //               }
  //               return prevRepos;
  //             });
  //             if (firstImageUrl) {
  //               console.log(
  //                 `First image URL for ${repo.name}: ${firstImageUrl}`
  //               );
  //             } else {
  //               console.log(`No image found in the README for ${repo.name}`);
  //             }
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [token]);

  console.log(repos);
  return (
    <>
      <div id="projects" className="w-full dark:bg-gray-500/10 bg-gray-400/10">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 py-24">
          <div className="text-center dark:text-white mb-10">
            <h1 className="text-3xl font-sans font-semibold mb-1">Projects</h1>
            <p className="text-gray-500">Projects that showcase my skills</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {repos.map((repo, index) => {
              return (
                <ProjectCard
                  key={index}
                  id={index}
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
