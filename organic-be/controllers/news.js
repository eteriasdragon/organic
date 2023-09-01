import {getNews} from "../helpers/news.js";

export const getNewsList = async (req,res) => {
  const news = await getNews();
  res.send(news);
}