import {getOrganicPros} from "../helpers/organicPros.js";
import express from "express";

const app = express();

app.get('/organic-pros', async function(req, res) {
  const organicProsList = await getOrganicPros();
  res.send(organicProsList);
});
