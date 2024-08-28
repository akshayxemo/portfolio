import Tag from "./Tag";
import PropTypes from "prop-types";
import {
  format,
  parseISO,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
} from "date-fns";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  remarks: PropTypes.string.isRequired,
  internship: PropTypes.bool.isRequired,
  remote: PropTypes.bool.isRequired,
  onsite: PropTypes.bool.isRequired,
  gitRepo: PropTypes.string,
};
export default function Experience({
  id,
  title,
  company,
  link,
  fromDate,
  toDate,
  remarks,
  internship,
  remote,
  onsite,
  gitRepo,
}) {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    setYear(
      differenceInCalendarYears(
        toDate ? parseISO(toDate) : new Date(),
        parseISO(fromDate)
      )
    );
    setMonth(
      differenceInCalendarMonths(
        toDate ? parseISO(toDate) : new Date(),
        parseISO(fromDate)
      )
    );
    setDays(
      differenceInCalendarDays(
        toDate ? parseISO(toDate) : new Date(),
        parseISO(fromDate)
      )
    );
  }, [toDate, fromDate]);

  return (
    <>
      <Fade className="mb-10 last:mb-0" triggerOnce>
        <div id={id} className="flex">
          <div className="flex flex-row gap-4 max-sm:flex-wrap">
            <div className="text-5xl font-bold opacity-10">{id}</div>
            <div className=" pb-5">
              <div className="mb-4">
                <div className="flex flex-row items-center text-2xl mb-2">
                  <h3 className="capitalize">
                    {title}{" "}
                    <a
                      href={link}
                      target="blank"
                      className="hover:underline hover:underline-offset-8 uppercase"
                    >
                      {company}
                    </a>
                  </h3>{" "}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-start mt-2">
                {internship && (
                  <Tag
                    text="Internship"
                    style="bg-orange-500/40 dark:text-orange-400 text-orange-700 text-sm"
                  />
                )}
                {remote && (
                  <Tag
                    text="Remote"
                    style="bg-sky-500/40 dark:text-sky-400 text-sky-700 text-sm"
                  />
                )}
                {onsite && (
                  <Tag
                    text="Onsite"
                    style="bg-indigo-500/40 dark:text-indigo-400 text-indigo-700 text-sm"
                  />
                )}
                <span className="dark:text-gray-600 text-gray-500">
                  +{" "}
                  {year > 0
                    ? year + " year"
                    : month > 0
                    ? month + " month"
                    : days + " days"}
                </span>
              </div>
              <p className="mt-4 dark:text-gray-600 text-gray-500">{remarks}</p>
              <br />

              {gitRepo && (
                <div className="flex flex-wrap items-center w-full gap-4 mb-5">
                  <a
                    href={gitRepo}
                    target="blank"
                    className="p-3 rounded border-[0.5px] border-gray-600/25 dark:border-none bg-white dark:bg-gray-800/30 dark:hover:bg-gray-700/40 hover:scale-105 flex justify-center items-center gap-3"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              )}

              <span className="dark:text-gray-600 text-gray-500">
                <em>
                  {format(parseISO(fromDate), "MMMM d, yyyy")} -{" "}
                  {toDate
                    ? format(parseISO(toDate), "MMMM d, yyyy")
                    : "Present"}
                </em>
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
