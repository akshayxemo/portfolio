import PropTypes from "prop-types";
Blog.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	imageLink: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	publishDate: PropTypes.string.isRequired,
};
function Blog({ id, title, desc, imageLink, link, publishDate }) {
	const handleIframe = () => {
		window.location.href = link;
	};
	return (
		<>
			<div
				key={id}
				id={id}
				onClick={handleIframe}
				className="p-4 border-[0.5px] dark:border-gray-600/40 dark:bg-transparent bg-white dark:bg-black border-gray-600/25 rounded-lg dark:text-white overflow-hidden flex items-center gap-4 max-md:flex-wrap cursor-pointer mb-6 last:mb-0 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] "
			>
				<img
					src={imageLink}
					alt=""
					className="aspect-auto bg-cover object-cover overflow-hidden max-md:hidden"
					width={160}
					height={107}
				/>
				<div className="">
					{/* date */}
					<p className="mb-2 text-green-500">{publishDate}</p>
					<h1 className="text-2xl font-extrabold">{title}</h1>
					<p className="text-gray-500">{desc}</p>
				</div>
			</div>
		</>
	);
}
export default Blog;
