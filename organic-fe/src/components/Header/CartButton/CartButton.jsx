import "./CartButton.scss";
import cartIcon from "./cart-icon.png";
import PropTypes from "prop-types";

export default function CartButton({count}) {
  return <div className="cart-button">
    <div className="cart-button__icon-wrapper">
      <img src={cartIcon} alt=""/>
    </div>
    <p className="cart-button__text">Cart ({count})</p>
  </div>
}

CartButton.propTypes = {
  count: PropTypes.number
}