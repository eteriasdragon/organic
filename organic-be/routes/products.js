import express from "express";
import {getProductsList} from "../controllers/products.js";
const router = express.Router();

router.get("/", getProductsList);

export default router;