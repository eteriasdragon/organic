import express from "express";
import {getOrganicProsList} from "../controllers/organic-pros.js";
const router = express.Router();

router.get("/", getOrganicProsList);

export default router;