import express from "express";
import {getPositionsList} from "../controllers/positions.js";
const router = express.Router();

router.get("/", getPositionsList);

export default router;