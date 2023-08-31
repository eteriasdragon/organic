import {getNews} from "../helpers/news.js";
import express from "express";

const app = express();

app.get('/news', async function(req, res) {
  const news = await getNews();
  res.send(news);
});