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
        id={id}
        onClick={handleIframe}
        className="p-4 border-[0.5px] dark:border-gray-600/40 dark:bg-transparent bg-white dark:bg-black border-gray-600/25 rounded-lg dark:text-white overflow-hidden flex gap-4 max-md:flex-wrap cursor-pointer mb-6 last:mb-0"
      >
        <div className="cover overflow-hidden max-w-36 max-h-36 max-md:hidden">
          <img src={imageLink} alt="" className="aspect-square" />
        </div>
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
