import { contactLinks } from "../../assets/data/socials";
import { Fade } from "react-awesome-reveal";

const SocialNetwork = () => {
	return (
		<Fade delay={500}>
			<div className="socials flex flex-row mt-6 gap-3 pt-6 border-t border-gray-600/40">
				{contactLinks.socials.map((social, index) => {
					return (
						<a
							key={`${index}social${social.name}`}
							href={social.link}
							target="blank"
							className={`p-3 aspect-square rounded-full cursor-pointer bg-slate-800/60 text-white ${social.bgColor} transition-all ease-in-out delay-100`}
							title={social.name}
						>
							{social.icon}
						</a>
					);
				})}
			</div>
		</Fade>
	);
};

export default SocialNetwork;
