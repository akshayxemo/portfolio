import { Fade } from "react-awesome-reveal";
import { skillsObj } from "../assets/data/skills";
import { useEffect, useState } from "react";
import SkillsWithAnimatedTooltip from "./ui/SkillsWithAnimatedTooltip";

export default function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(Object.keys(skillsObj));
  }, []);

  return (
    <>
      <div className="w-full dark:text-white">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 pb-28 pt-10 max-xsm:pb-20 w-full">
          <Fade delay={250} triggerOnce>
            <div className="text-center dark:text-white mb-10">
              <h1 className="text-3xl font-sans font-semibold mb-1">
                Tech Stack, Tools & Skills
              </h1>
              <p className="text-gray-500">
                Technologies and Tools that I know and use
              </p>
            </div>
          </Fade>
          <div className="flex flex-wrap justify-center items-center gap-8 text-4xl max-sm:text-3xl max-xxsm:text-2xl">
            {/* .............. Skills .............. */}
            {/* {skills.map((key, index) => {
							return (
								<Slide direction={"up"} delay={100 + index * 60} key={index}>
									<Fade delay={200 + index * 60}>
										<div
											className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl"
											title={key}
										>
											{skillsObj[key]}
										</div>
									</Fade>
								</Slide>
							);
						})} */}
            <SkillsWithAnimatedTooltip items={skills} />
          </div>
        </div>
      </div>
    </>
  );
}
