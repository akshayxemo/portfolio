import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import {
	FaBehance,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaMedium,
	FaXTwitter,
} from "react-icons/fa6";

export const contactLinks = {
	socials: [
		{
			name: "Linked In",
			link: "https://www.linkedin.com/in/akshay-kumar-das-945405240",
			icon: <FaLinkedinIn />,
			bgColor: "hover:bg-blue-800",
		},
		{
			name: "GitHub",
			link: "https://github.com/akshayxemo",
			icon: <FaGithub />,
			bgColor: "hover:bg-slate-600",
		},
		{
			name: "Behance",
			link: "https://www.behance.net/akshaykumardas",
			icon: <FaBehance />,
			bgColor: "hover:bg-sky-700",
		},
		{
			name: "Medium",
			link: "https://medium.com/@akshaykrdas001",
			icon: <FaMedium />,
			bgColor: "hover:bg-white hover:text-black",
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/_yahska_ad_",
			icon: <FaInstagram />,
			bgColor:
				"hover:bg-gradient-to-tl hover:from-purple-600 hover:via-rose-600 hover:to-yellow-600",
		},
		{
			name: "X",
			link: "https://twitter.com/yahska_ad",
			icon: <FaXTwitter />,
			bgColor: "hover:bg-slate-800",
		},
	],
};
