import "./NewsSection.scss";
import {CustomHeroBlock, NewsList, SubscribeForm} from "../../components/index.js";

export default function NewsSection() {
  return (
    <div className="news-page">
      <CustomHeroBlock title="Recent News" additionalDecorSrc="./src/assets/news/decore.png" backgroundSrc="./src/assets/news/background.png" />
      <div className="news-page__inner-container">
        <NewsList />
        <SubscribeForm />
      </div>
    </div>
  )
}