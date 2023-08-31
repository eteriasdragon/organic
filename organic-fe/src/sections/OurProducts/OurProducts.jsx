import "./OurProducts.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchAllProducts} from "../../redux/actions/products.js";
import Button from "../../components/Button/Button.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";

export default function OurProducts () {

  const products = useSelector((state) => state.products.productsArr);
  const dispatch = useDispatch();
  const [sortAmount, setSortAmount] = useState(8);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return(
    <section className="our-products-section">
      <div className="our-products-section__inner-container">
        {sortAmount === 8 ? <>
          <p className="our-products-section__subheading">Categories</p>
          <h3 className="our-products-section__heading">Our Products</h3></> : ""}
        <ProductsList productsArray={products} sortAmount={sortAmount}/>
        <Button onClick={() => {setSortAmount(sortAmount === 8 ? 16 : 8)}} style="our-products-section__show-btn default" text={sortAmount === 8 ? "Load More": "Hide All"}/>
      </div>
    </section>
  )
}