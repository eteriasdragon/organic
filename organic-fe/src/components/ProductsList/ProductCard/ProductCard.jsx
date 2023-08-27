import "./ProductCard.scss";
import PropTypes from "prop-types";
import Rating from "react-rating";

export default function ProductCard ({product, onClick}) {
  const {category, imgUrl, name, price, discount, rating, id} = product;
  return(
    <div className="product-card" onClick={() => onClick(id)}>
      <div className="product-card__category">{category}</div>
      <img src={imgUrl} alt={name} className="product-card__img"/>
      <p className="product-card__name">{name}</p>
      <div className="product-card__info">
        <div className="product-card__price">
          {discount ? <><span className="product-card__price-amount product-card__price-amount--old">${price}</span><span className="product-card__price-amount">${(price - price * discount / 100).toFixed(2)}</span></> : <><span className="product-card__price-amount">${price}</span></>}
        </div>
        <Rating className="product-card__rating" emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="star"/>} fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon"  alt="star"/>} initialRating={rating} readonly />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}