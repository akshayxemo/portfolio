import PropTypes from "prop-types";
MiniTag.propTypes = {
  Text: PropTypes.string.isRequired,
};
export default function MiniTag({ Text }) {
  return (
    <>
      <>
        <span className="rounded-full py-1 px-4 bg-blue-500/30 dark:text-blue-400 text-blue-700 text-xs">
          {Text}
        </span>
      </>
    </>
  );
}
