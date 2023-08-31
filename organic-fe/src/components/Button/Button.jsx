import "./Button.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default function Button ({text, style, onClick, disabled, navLink}) {
  return (
    navLink ? (
      <NavLink to={navLink} className={style + " button"}>
        {text}
      </NavLink>
    ) : (
      <button className={style + " button"} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    )
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  navLink: PropTypes.string,
}