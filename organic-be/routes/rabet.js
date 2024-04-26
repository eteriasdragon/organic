import express from "express";
import {get4rabet} from "../controllers/rabet.js";
const router = express.Router();

router.get("/", get4rabet);

export default router;