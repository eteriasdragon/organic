import "./NewsItem.scss";
import PropTypes from "prop-types";
import Button from "../../../components/Button/Button.jsx";

export default function NewsItem ({date, author, title, text, backgroundUrl}) {
  const url = `url("${backgroundUrl}")`;
  return(
    <div className="news-item" style={{backgroundImage: url}}>
      <div className="news-item__date"><span>{date.split(" ")[0]}</span><span>{date.split(" ")[1]}</span></div>
      <div className="news-item__info">
        <p className="news-item__author">By {author}</p>
        <p className="news-item__title">{title}</p>
        <p className="news-item__text">{text}</p>
        <Button style="default--yellow" text="Read More" />
      </div>
    </div>
  )
}

NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
}