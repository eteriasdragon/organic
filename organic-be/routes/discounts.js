import express from "express";
import {getAllDiscounts} from "../controllers/discounts.js";
const router = express.Router();

router.get("/", getAllDiscounts);

export default router;