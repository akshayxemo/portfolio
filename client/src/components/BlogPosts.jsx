import Blog from "./Blog";
import blogs from "../assets/data/blogs.json";
import { MdArticle } from "react-icons/md";

const BlogPost = () => {
	return (
		<>
			<div className="w-full" id="blogs">
				<div className="max-w-7xl mx-auto px-6 max-sm:px-4 py-24 flex flex-col">
					<div className="text-center dark:text-white mb-10">
						<h1 className="text-3xl font-sans font-semibold mb-1">Blogs</h1>
					</div>
					{blogs.map((blog, index) => {
						return (
							<Blog
								key={index}
								id={index + 1}
								title={blog.title}
								desc={blog.desc}
								imageLink={blog.imageLink}
								link={blog.link}
								publishDate={blog.publishDate}
							/>
						);
					})}

					<a
						href={"https://medium.com/@akshaykrdas001"}
						target="blank"
						className="mt-8 max-w-fit self-center px-6 py-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 text-purple-400 grow flex justify-center items-center gap-3"
					>
						<MdArticle /> Read More
					</a>
				</div>
			</div>
		</>
	);
};
export default BlogPost;
