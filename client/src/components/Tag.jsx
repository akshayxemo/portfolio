import PropTypes from "prop-types";

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
};
export default function Tag({ text, style }) {
  return (
    <>
      <span className={"rounded-full py-1 px-4 " + style}>{text}</span>
    </>
  );
}
