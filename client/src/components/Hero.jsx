import { FaEye } from "react-icons/fa6";
import profileImg2 from "../assets/ProfilePic-design.jpg";
import bgImg from "../assets/docs@tinypng.d9e4dcdc.png";
import bgGlow from "../assets/docs-dark@tinypng.1bbe175e.png";
import resumeLink from "../assets/data/resumeLink.json";
// import PropTypes from "prop-types";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import SocialNetwork from "./shared/SocialNetwork";

// Hero.propTypes = {
// 	socials: PropTypes.object.isRequired,
// };

export default function Hero() {
	return (
		<>
			<div className={` w-full h-auto overflow-hidden relative`}>
				<div
					className={`max-w-7xl h-auto mx-auto px-6 pb-40 pt-48 flex flex-row flex-wrap-reverse gap-5 justify-around items-center max-sm:py-32`}
				>
					<img
						src={bgImg}
						alt=""
						className="absolute w-full top-0 h-full opacity-20"
					/>
					<img
						src={bgGlow}
						alt=""
						className="absolute w-full top-0 h-full opacity-70"
					/>
					<div className="z-10 max-sm:flex max-sm:items-center max-sm:text-center max-sm:flex-col">
						<Fade>
							<Slide direction={"up"}>
								<p className="text-slate-500 text-lg tracking-wider font-sans">
									Hey there 👋
								</p>
							</Slide>
						</Fade>
						<div className="mt-5">
							<Fade>
								<Slide direction={"up"} delay={100}>
									<h1 className="dark:text-white text-slate-950 font-sans font-semibold text-5xl max-sm:text-4xl tracking-tight">
										{`I'm`} Akshay Kumar Das
									</h1>
								</Slide>
							</Fade>
							<Fade delay={200}>
								<p className="text-slate-500 mt-3">
									{"MCA' 24"} &nbsp;|&nbsp; Fullstack Web Developer
									&nbsp;|&nbsp; Android Developer &nbsp;|&nbsp; Graphics
									Designer
								</p>
							</Fade>

							<SocialNetwork />

							<div className="flex gap-4 items-center mt-10 justify-start max-sm:justify-center max-sm:w-full">
								<Slide direction={"left"}>
									<Fade delay={300}>
										<div className="w-40 h-12 p-[0.15rem] rounded-full gradient-border transition ease-in-out delay-100 hover:scale-105">
											<a
												href={resumeLink.link}
												target="blank"
												className="w-full h-full dark:bg-black dark:text-white text-slate-950 bg-white rounded-full cursor-pointer flex justify-center items-center gap-3"
											>
												Check my CV
											</a>
										</div>
									</Fade>
								</Slide>
							</div>
						</div>
					</div>
					<Zoom>
						<div>
							<img
								src={profileImg2}
								alt=""
								className="h-64 rounded-full aspect-square border-2 border-indigo-500 glow-indigo max-md:mb-10 max-sm:h-48"
							/>
						</div>
					</Zoom>
				</div>
			</div>
		</>
	);
}
