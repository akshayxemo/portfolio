const ErroPage = () => {
  return (
    <>
      <div className="h-screen w-full p-5 bg-black flex justify-center items-center">
        <div className="py-4 max-w-md text-white text-center">
          <h1 className="text-9xl font-extrabold mb-4">
            4<span className="text-purple-500">0</span>4
          </h1>
          <p className="text-lg">Page Not Found</p>
          <p className="text-sm">
            Woops looks like you are in the wrong location !!!
          </p>
          <p className="mt-6 border-t-[0.5px] border-white/30 p-3">
            Go back to the
            <a href="/" className="text-blue-400">
              {" "}
              Home page
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default ErroPage;
