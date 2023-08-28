import "./Testimonials.scss";
import ReviewsSlider from "../../components/ReviewsSlider/ReviewsSlider.jsx";
import StateCircle from "../../components/StateCircle/StateCircle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getReviews, getStatistics} from "../../redux/actions/products.js";

export default function Testimonials () {

  const reviewsArr = useSelector((state) => state.reviews.reviewsArr);
  const statisticsArr = useSelector((state) => state.statistics.statisticsArr);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getReviews());
    dispatch(getStatistics());
  }, [dispatch]);


  return(
    <section className="testimonials">
      <div className="testimonials__inner-container">
        <p className="testimonials__subheading">Testimonial</p>
        <h3 className="testimonials__heading">What Our Customer Saying?</h3>
        <ReviewsSlider reviews={reviewsArr}/>
        <div className="testimonials__statistic-wrapper">
          {statisticsArr.map((data, id) => {
            return <StateCircle number={data.number} title={data.title} className="testimonials__statistic-item" key={id}/>
          })}
        </div>
      </div>
    </section>
  )
}

