import "./Button.scss";
import PropTypes from "prop-types";

export default function Button ({text, style}) {
  return <button className={style + " button"}>
    {text}
  </button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}