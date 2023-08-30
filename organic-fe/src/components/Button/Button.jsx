import "./Button.scss";
import PropTypes from "prop-types";

export default function Button ({text, style, onClick, disabled}) {
  return <button className={style + " button"} onClick={onClick} disabled={disabled}>
    {text}
  </button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}