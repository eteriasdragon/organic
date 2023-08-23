import "./SliderItem.scss";
import PropTypes from "prop-types";
import Rating from "react-rating";

export default function SliderItem({user}) {
  const {rate, avatarUrl, reviewText, author, authorPosition} = user;
  return (
  <div className="reviews-slider__slider-item">
    <div className="reviews-slider__avatar-wrapper">
      <img src={avatarUrl} alt="person" className="reviews-slider__avatar"/>
    </div>
    <div className="reviews-slider__rate-wrapper">
      <Rating className="reviews-slider__rating" emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="star"/>} fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon"  alt="star"/>} initialRating={rate} readonly />
    </div>
    <p className="reviews-slider__text">{reviewText}</p>
    <p className="reviews-slider__author">{author}</p>
    <p className="reviews-slider__author-position">{authorPosition}</p>
  </div>
)
}

SliderItem.propTypes = {
  user: PropTypes.object.isRequired,
}