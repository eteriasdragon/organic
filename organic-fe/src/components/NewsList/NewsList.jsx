import "./NewsList.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNews} from "../../redux/actions/products.js";
import NewsItem from "./NewsItem/NewsItem.jsx";
import PropTypes from "prop-types";

export default function NewsList ({amount}) {
  const newsData = useSelector((state) => state.news.newsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return(
        <div className="news-list">
          {newsData ? newsData.slice(0, amount).map((item ,id) => {
            return <NewsItem key={id} date={item.date} backgroundUrl={item.backgroundUrl} author={item.author} text={item.text} title={item.title} />
          }) : ""}
        </div>
  )
}

NewsList.propTypes = {
  amount: PropTypes.number,
}