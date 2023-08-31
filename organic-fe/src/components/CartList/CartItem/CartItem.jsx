import "./CartItem.scss";
import PropTypes from "prop-types";

  export default function CartItem ({product, quantity, removeFromCart, addToCart}) {
    const {name, imgUrl, id, price, discount } = product;

    const removeProductFromCart = () => {
      removeFromCart(id);
    }

    return (
    <div className="cart-list-item">
      <div className="cart-list-item__img-wrapper">
        <img src={imgUrl} alt={name} className="cart-list-item__img"/>
      </div>
      <p className="cart-list-item__name">{name} </p>
      <p className="cart-list-item__price-wrapper">
        {discount ? <><span className="product-card__price-amount product-card__price-amount--old">${price}</span><span className="product-card__price-amount">${(price - price * discount / 100).toFixed(2)}</span></> : <><span className="product-card__price-amount">${price}</span></>}
      </p>
      <p className="cart-list-item__quantity">Quantity:</p>
      <input className="cart-list-item__amount" type="number" value={quantity} onChange={(event) => addToCart(id, +event.target.value)} min={1}/>
      <div onClick={removeProductFromCart} className="cart-list-item__remove-btn">
        X
      </div>
    </div>
  )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
}