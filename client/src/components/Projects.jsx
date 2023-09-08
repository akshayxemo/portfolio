import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <>
      <div className="w-full dark:bg-gray-700/10 bg-gray-400/10">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 py-24">
          <div className="text-center dark:text-white mb-10">
            <h1 className="text-3xl font-sans font-semibold mb-1">Projects</h1>
            <p className="text-gray-500">Projects that showcase my skills</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <ProjectCard
              text={`It is a platform where peoples can prepare for interview by
            attending real life 1:1 live interview session with mentors and
            getting a performance result. This platform also provide performance
            visualization based on the interview results with 1:1 chat system
            and subscription payment gateway (Stripe).`}
            />
            <ProjectCard
              text={`It is a platform where peoples can prepare for interview by
            attending real life 1:1 live interview session with mentors and
            getting a performance result. `}
            />
          </div>
        </div>
      </div>
    </>
  );
}
