import express from "express";
import {getNewsList} from "../controllers/news.js";
const router = express.Router();

router.get("/", getNewsList);

export default router;