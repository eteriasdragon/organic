import express from "express";
import {getStatisticsInfo} from "../controllers/statistics.js";
const router = express.Router();

router.get("/", getStatisticsInfo);

export default router;