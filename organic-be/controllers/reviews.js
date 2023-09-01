import {getReviews} from "../helpers/reviews.js";

export const getReviewslist = async (req,res) => {
  const reviewsList = await getReviews();
  res.send(reviewsList);
}