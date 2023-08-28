import "./HeroBlock.scss";
import Button from "../../components/Button/Button.jsx";

export default function HeroBlock() {
  return <section className="hero-block">
    <div className="hero-block__inner-container">
      <p className="hero-block__subheading">100% Natural Food</p>
      <p className="hero-block__heading">Choose the best healthier way of life
      </p>
      <Button style="default--yellow" text="Explore Now"/>
    </div>
  </section>
}