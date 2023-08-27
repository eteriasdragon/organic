import "./PositionItem.scss";
import PropTypes from "prop-types";

export default function PositionItem ({title, imageUrl}) {
  const url = `url("${imageUrl}")`;
  return(
    <div className="position-item" style={{backgroundImage: url}}>
      <p className="position-item__title">{title}</p>
    </div>
  )
}

PositionItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}