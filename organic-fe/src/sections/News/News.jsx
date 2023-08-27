import "./News.scss";
import newsData from "./news-data.js";
import NewsItem from "./NewsItem/NewsItem.jsx";
import Button from "../../components/Button/Button.jsx";

export default function News () {
  return(
    <section className="news-section">
      <div className="news-section__inner-container">
        <div className="news-section__header">
          <div className="news-section__header-info">
            <p className="news-section__subheading">News</p>
            <h3 className="news-section__heading">Discover weekly content about organic food, & more</h3>
          </div>
          <Button style="default--white" text="More News" />
        </div>
        <div className="news-section__news-list">
          {newsData.map((item ,id) => {
            return <NewsItem key={id} date={item.date} backgroundUrl={item.backgroundUrl} author={item.author} text={item.text} title={item.title} />
          })}
        </div>
      </div>
    </section>
  )
}