import "./WeOffer.scss";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {ProductsList} from "../../components/index.js";

export default function WeOffer ({category}) {
  const products = useSelector((state) => state.products.productsArr);
  return(
    <section className="offer-section">
      <div className="offer-section__inner-container">
        <p className="offer-section__subheading">Offer</p>
        <h3 className="offer-section__heading">We Offer Organic For You</h3>
        <ProductsList productsArray={products.filter(product => product.category === category)} sortAmount={4}/>
      </div>
    </section>
  )
}

WeOffer.propTypes = {
  category: PropTypes.string.isRequired,
}