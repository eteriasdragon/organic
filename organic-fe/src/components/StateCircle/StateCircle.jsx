import "./StateCircle.scss";
import PropTypes from "prop-types";

export default function StateCircle ({className, number, title}) {
  return(
    <div className={className}>
      <svg height="200" width="200">
        <circle className="circle" cx="100" cy="100" r="95" stroke="#7EB693" stroke-width="5" fill-opacity="0" />
      </svg>
      <div className="statistics__wrapper">
        <p className="statistics__number">{number}</p>
        <p className="statistics__title">{title}</p>
      </div>
    </div>
  )
}

StateCircle.propTypes = {
  className: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}