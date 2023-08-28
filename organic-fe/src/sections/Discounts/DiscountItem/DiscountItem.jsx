import "./DiscountItem.scss";
import PropTypes from "prop-types";

export default function DiscountsItem ({category, title, url, type}) {
  const urlFprDisc = `url(${url})`;
  return <div className={type+ " discount-item"} style={{backgroundImage: urlFprDisc}}>
    <p className="discount-item__type">{category}!!</p>
    <p className="discount-item__title">{title}</p>
  </div>
}

DiscountsItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}