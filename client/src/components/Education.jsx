import PropTypes from "prop-types";
import { Slide, Fade } from "react-awesome-reveal";

Education.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  marks: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default function Education({ id, title, from, year, marks, status }) {
  return (
    <>
      <Slide direction={"up"} className="mb-4 last:mb-0">
        <Fade delay={100}>
          <div
            id={id}
            className="dark:text-white text-black p-6 dark:bg-slate-500/10 bg-slate-500/5 rounded-lg"
          >
            <div className="flex flex-row justify-between max-xsm:flex-wrap gap-3 mb-3">
              <div>
                <h1 className="text-2xl break-words mb-1 font-semibold font-sans">
                  {title}
                </h1>
                <p className="break-words mb-4">{from}</p>
                {status === "Pursuing" ? (
                  <span className="rounded-full text-sm py-[0.1rem] px-4 bg-green-500/40 dark:text-green-400 text-green-700">
                    {status}
                  </span>
                ) : (
                  <span className="rounded-full text-sm py-[0.1rem] px-4 bg-sky-500/40 dark:text-sky-400 text-sky-700">
                    {status}
                  </span>
                )}
              </div>
              <div>
                <span className="text-sm max-xxsm:text-xs max-xxsm:leading-[0.5rem] font-light italic text-gray-500">
                  {year}
                </span>
              </div>
            </div>
            <hr className="my-4 dark:border-gray-400/30 border-gray-700/20"></hr>
            <div>
              <p className="text-gray-500">{marks}</p>
            </div>
          </div>
        </Fade>
      </Slide>
    </>
  );
}
