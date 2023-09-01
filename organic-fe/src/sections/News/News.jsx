import "./News.scss";
import {Button} from "../../components/index.js";
import NewsList from "../../components/NewsList/NewsList.jsx";

export default function News () {

  return(
    <section className="news-section">
      <div className="news-section__inner-container">
        <div className="news-section__header">
          <div className="news-section__header-info">
            <p className="news-section__subheading">News</p>
            <h3 className="news-section__heading">Discover weekly content about organic food, & more</h3>
          </div>
          <Button style="default--white" text="More News" navLink="/news"/>
        </div>
        <div className="news-section__news-list">
          <NewsList amount={2}/>
        </div>
      </div>
    </section>
  )
}