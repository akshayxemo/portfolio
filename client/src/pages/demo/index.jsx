const Demo = () => {
  return (
    <>
      <div className="h-screen w-full p-5 bg-black flex justify-center items-center">
        <div className="py-4 max-w-md text-white text-center">
          <h1 className="text-3xl">
            WELCOME You Are in the
            <br />
            <strong className="text-purple-500">Demo Page</strong>
          </h1>
          <p className="text-sm mt-5">
            Hey you are in the testing page. This page contains nothing but used
            for testing purpose only. you can go back from{" "}
            <a href="/" className="underline text-blue-400">
              here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Demo;
