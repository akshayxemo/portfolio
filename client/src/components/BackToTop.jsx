import { useEffect, useState } from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";

export default function BackToTop() {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const BackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
	return (
		<>
			{scrollY > 250 ? (
				<button
					className="p-3 rounded text-white bg-green-700 hover:bg-green-600 fixed right-4 bottom-5 text-3xl z-50 flex flex-col justify-center items-center"
					onClick={BackToTop}
				>
					<BiSolidUpArrowAlt />
					<span className="text-xs max-md:hidden">Back to Top</span>
				</button>
			) : (
				""
			)}
		</>
	);
}
