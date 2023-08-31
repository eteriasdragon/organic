import {getReviews} from "../helpers/reviews.js";
import express from "express";

const app = express();

app.get('/reviews', async function(req, res) {
  const reviewsList = await getReviews();
  res.send(reviewsList);
});