import PropTypes from "prop-types";
import "./CustomHeroBlock.scss";

export default function CustomHeroBlock ({title, backgroundSrc, additionalDecorSrc}) {

  const background = additionalDecorSrc ? `url("${additionalDecorSrc}"), url("${backgroundSrc}")`: `url("${backgroundSrc}")`;

  return (
    <section className="custom-hero-section" style={{background: background}}>
      <div className="custom-hero-section__inner-container">
        <p className="custom-hero-section__heading">
          {title}
        </p>
      </div>
    </section>
  )
}

CustomHeroBlock.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundSrc: PropTypes.string,
  additionalDecorSrc: PropTypes.string,
}