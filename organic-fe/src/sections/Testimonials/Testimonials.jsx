import "./Testimonials.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStatistics} from "../../redux/actions/statistics.js";
import {ReviewsSlider, StateCircle} from "../../components/index.js";
import {getReviews} from "../../redux/actions/reviews.js";

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

