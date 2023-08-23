import Button from "../Button/Button.jsx";
import "./SubscribeForm.scss";

export default function SubscribeForm () {
return (
  <div className="subscribe">
    <div className="subscribe__inner-container">
    <p className="subscribe__slogan">Subscribe to our Newsletter
    </p>
    <form className="subscribe-form">
      <input type="email" className="subscribe-form__input" placeholder="Your Email Address"/>
      <Button type="submit" className="subscribe-form__submit-btn" style="pagination" text="Subscribe"/>
    </form>
    </div>
  </div>
)
}