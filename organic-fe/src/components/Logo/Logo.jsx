import "./Logo.scss";
import logo from "./logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img alt= "" src={logo} className="logo__img" />
      <h3 className="logo__text">Organic</h3>
    </div>
  )
}