import "./AboutItem.scss";
import PropTypes from "prop-types";

export default function AboutItem({url, title, text}) {
  return (
    <div className="about-item">
      <div className="about-item__img-wrapper">
        <img src={url} alt="small icon" className="about-item__img"/>
      </div>
      <div className="about-item__info">
        <p className="about-item__title">{title}</p>
        <p className="about-item__text">{text}</p>
      </div>
    </div>
  )
}

AboutItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}