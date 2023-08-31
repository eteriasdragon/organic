import {getPositions} from "../helpers/positions.js";
import express from "express";

const app = express();

app.get('/positions', async function(req, res) {
  const positionsList = await getPositions();
  res.send(positionsList);
});