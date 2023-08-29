import "./Alert.scss";
import PropTypes from "prop-types";

export default function Alert({className, text}) {
  return <div className={className + " alert"}>{text}</div>
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}