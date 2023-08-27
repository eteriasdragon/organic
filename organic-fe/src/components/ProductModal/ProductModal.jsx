import "./ProductModal.scss";
import Rating from "react-rating";
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

export default function ProductModal({product, closeModal, addToCart}) {
  const {addInfo, category, discount, price, imgUrl, mainInfo, name, rating, id} = product;
  const [activeInfo, setActiveInfo] = useState("main");
  const [cartCount, setCartCount] = useState(1);

  return(
    <div className="portal">
      <div className="portal__inner-container">
        <div className="product-modal">
          <button onClick={closeModal} className="portal__close-btn">X</button>
          <div className="product-modal__category">{category}</div>
          <div className="product-modal__visual">
            <div className="product-modal__img-wrapper">
              <img src={imgUrl} alt={name} className="product-modal__img"/>
            </div>
            <div className="product-modal__info">
              <div className="product-modal__name">{name}</div>
              <Rating className="product-modal__rating" emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="star"/>} fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon"  alt="star"/>} initialRating={rating} readonly />
              <p className="product-modal__price-wrapper">
                {discount ? <><span className="product-card__price-amount product-card__price-amount--old">${price}</span><span className="product-card__price-amount">${(price - price * discount / 100).toFixed(2)}</span></> : <><span className="product-card__price-amount">${price}</span></>}
              </p>
              <p className="product-modal__descr">{addInfo}</p>
              <div className="product-modal__cart-control">
                <p className="product-modal__cart-quantity">Quantity:</p>
                <input onChange={(event) => setCartCount(event.target.value)} type="number" className="product-modal__cart-count" value={cartCount}/>
                <Button onClick={addToCart(cartCount, id)} style="product-modal__cart-add default" text="Add To Cart" />
              </div>
            </div>
          </div>
          <div className="product-modal__text-wrapper">
            <div className="product-modal__text-btn-wrapper">
              <Button onClick={() => setActiveInfo("main")} style={activeInfo === "main" ? "pagination" : "pagination inactive"} text="Product Description" />
              <Button onClick={() => setActiveInfo("additional")} style={activeInfo === "additional" ? "pagination" : "pagination inactive"} text="Additional Info" />
            </div>
            <p>
              {activeInfo === "main" ?  mainInfo : addInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
}

