import "./SearchIcon.scss";
import searchIcon from "./search-icon.png";

export default function SearchIcon() {
  return <div className="search-icon">
    <div className="search-icon__icon-wrapper">
    <img className="search-icon__icon" src={searchIcon} alt=""/>
    </div>
  </div>
}