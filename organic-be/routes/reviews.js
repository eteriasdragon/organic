import express from "express";
import {getReviewslist} from "../controllers/reviews.js";
const router = express.Router();

router.get("/", getReviewslist);

export default router;