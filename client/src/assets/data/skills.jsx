import { DiIllustrator, DiJava, DiPhotoshop } from "react-icons/di";
import {
	SiBootstrap,
	SiExpress,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiFlutter,
	SiFigma,
	SiPostman,
} from "react-icons/si";

export const skillsObj = {
	Java: (
		<DiJava className="text-orange-500 hover:scale-110 ease-in-out transition-all" />
	),
	ReactJs: (
		<SiReact className="text-blue-500 hover:scale-110 ease-in-out transition-all" />
	),
	TailwindCss: (
		<SiTailwindcss className="text-sky-500 hover:scale-110 ease-in-out transition-all" />
	),
	Bootstrap: (
		<SiBootstrap className="text-purple-500 hover:scale-110 ease-in-out transition-all" />
	),
	ExpressJs: (
		<SiExpress className=" hover:scale-110 ease-in-out transition-all" />
	),
	NodeJs: (
		<SiNodedotjs className="text-green-600 hover:scale-110 ease-in-out transition-all" />
	),
	MySql: (
		<SiMysql className="text-indigo-500 hover:scale-110 ease-in-out transition-all" />
	),
	MongoDB: (
		<SiMongodb className="text-green-500 hover:scale-110 ease-in-out transition-all" />
	),
	Flutter: (
		<SiFlutter className="text-sky-400 hover:scale-110 ease-in-out transition-all" />
	),
	Postman: (
		<SiPostman className="text-orange-600 hover:scale-110 ease-in-out transition-all" />
	),
	Photoshop: (
		<DiPhotoshop className="text-blue-500 hover:scale-110 ease-in-out transition-all" />
	),
	Illustrator: (
		<DiIllustrator className="text-amber-600 hover:scale-110 ease-in-out transition-all" />
	),
	Figma: (
		<SiFigma className="text-rose-500 hover:scale-110 ease-in-out transition-all" />
	),
};
