import "./CartButton.scss";
import cartIcon from "./cart-icon.png";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function CartButton() {
  const cartArr = useSelector((state) => state.cart.cartArr);
  const [cartCount, setCartCount] = useState(null);

  useEffect(() => {
    const productsInCartAmount = cartArr.reduce((result, cartItem) => {
      return result += +cartItem.quantity;
    }, 0);
    setCartCount(productsInCartAmount);
  }, [cartArr]);

  return <NavLink to="/cart" className="cart-button">
    <div className="cart-button__icon-wrapper">
      <img src={cartIcon} alt=""/>
    </div>
    <p className="cart-button__text">Cart ({cartCount})</p>
  </NavLink>
}