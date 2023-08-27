import "./ListItem.scss";
import PropTypes from "prop-types";

export default function ListItem ({title, descr}) {
  return(
    <div className="pros-item">
      <p className="pros-item__title">{title}</p>
      <p className="pros-item__descr">{descr}</p>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
}