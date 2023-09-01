import express from "express";
import {getOrdersList, pushNewOrder} from "../controllers/orders.js";
const router = express.Router();

router.get("/", getOrdersList);

router.post("/", pushNewOrder);

export default router;