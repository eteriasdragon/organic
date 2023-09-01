import "./SubscribeForm.scss";
import {Button} from "../index.js";

export default function SubscribeForm () {
return (
  <div className="subscribe">
    <div className="subscribe__inner-container" >
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