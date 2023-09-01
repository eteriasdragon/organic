import "./NewsSection.scss";
import {CustomHeroBlock, NewsList, SubscribeForm} from "../../components/index.js";

export default function NewsSection() {
  return (
    <div className="news-page">
      <CustomHeroBlock title="Recent News" additionalDecorSrc="https://i.ibb.co/zXfjmZS/news-decore.png" backgroundSrc="https://i.ibb.co/B2fK8j7/news-background.png" />
      <div className="news-page__inner-container">
        <NewsList />
        <SubscribeForm />
      </div>
    </div>
  )
}