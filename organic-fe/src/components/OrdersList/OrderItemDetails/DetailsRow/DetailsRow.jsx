import PropTypes from "prop-types";
import "./DetailsRow.scss";

export default function Row({position, quantity}) {

  const {imgUrl, name, price, discount} = position;

  const priceWithDiscount = price - price * discount/100;

  return (
    <div className="details-row">
      <div className="details-row__main">
        <img className="details-row__img" src={imgUrl} alt={name}/>
        <p className="details-row__name">{name}</p>
      </div>
      <div className="details-row__price">{priceWithDiscount.toFixed(2)} $</div>
      <div className="details-row__amount">{quantity}</div>
      <div className="details-row__total">{(priceWithDiscount * quantity).toFixed(2)} $</div>
    </div>
  )
}

Row.propTypes = {
  position: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
}