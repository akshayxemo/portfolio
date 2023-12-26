import Blog from "./Blog";
import blogs from "../assets/data/blogs.json";
const BlogPost = () => {
  return (
    <>
      <div className="w-full" id="blogs">
        <div className="max-w-7xl mx-auto px-6 max-sm:px-4 py-24">
          <div className="text-center dark:text-white mb-10">
            <h1 className="text-3xl font-sans font-semibold mb-1">Blogs</h1>
          </div>
          {blogs.map((blog, index) => {
            return (
              <>
                <Blog
                  id={index + 1}
                  title={blog.title}
                  desc={blog.desc}
                  imageLink={blog.imageLink}
                  link={blog.link}
                  publishDate={blog.publishDate}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BlogPost;
