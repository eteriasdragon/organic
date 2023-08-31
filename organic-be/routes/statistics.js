import {getStatistics} from "../helpers/statistics.js";
import express from "express";

const app = express();

app.get('/statistics', async function(req, res) {
  const stateList = await getStatistics();
  res.send(stateList);
});