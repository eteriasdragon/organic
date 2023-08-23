import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewsSlider.scss";
import SliderItem from "./SliderItem/SliderItem.jsx";
import PropTypes from "prop-types";

export default function ReviewsSlider ({reviews}) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1
  };
  return(
      <Slider {...sliderSettings} className="reviews-slider">
        {reviews.map((client, id) => {
          return <SliderItem key={id} user={client}/>
        })}
      </Slider>
  )
}

ReviewsSlider.propTypes = {
  reviews: PropTypes.array.isRequired,
}