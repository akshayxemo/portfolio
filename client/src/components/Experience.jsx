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
}) {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    setYear(differenceInCalendarYears(parseISO(toDate), parseISO(fromDate)));
    setMonth(differenceInCalendarMonths(parseISO(toDate), parseISO(fromDate)));
    setDays(differenceInCalendarDays(parseISO(toDate), parseISO(fromDate)));
  }, [toDate, fromDate]);

  return (
    <>
      <div id={id} className="flex mb-8 last:mb-0">
        <div className="flex flex-row gap-4 max-sm:flex-wrap">
          <div className="text-5xl font-bold opacity-10">{id}</div>
          <div>
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
                  style="bg-orange-500/40 dark:text-orange-400 text-orange-700"
                />
              )}
              {remote && (
                <Tag
                  text="Remote"
                  style="bg-sky-500/40 dark:text-sky-400 text-sky-700"
                />
              )}
              {onsite && (
                <Tag
                  text="Onsite"
                  style="bg-indigo-500/40 dark:text-indigo-400 text-indigo-700"
                />
              )}
              <span className="dark:text-gray-600 text-gray-500">
                +{" "}
                {year > 0
                  ? year + " year"
                  : month > 0
                  ? month + " month"
                  : days + "days"}
              </span>
            </div>
            <p className="mt-4 dark:text-gray-600 text-gray-500">{remarks}</p>
            <br />
            <span className="dark:text-gray-600 text-gray-500">
              <em>
                {format(parseISO(fromDate), "MMMM d, yyyy")} -{" "}
                {format(parseISO(toDate), "MMMM d, yyyy")}
              </em>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
