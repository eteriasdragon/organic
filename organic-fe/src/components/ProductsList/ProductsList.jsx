import "./ProductsList.scss";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../redux/actions/cart.js";
import {Alert, ProductModal} from "../index.js";

export default function ProductsList({productsArray, sortAmount}) {
  const products = useSelector((state) => state.products.productsArr);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertActive, setIsAlertActive] = useState(null);
  const [alertText, setAlertText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let sortedProducts = productsArray;

    if (sortAmount) {
      sortedProducts = sortedProducts.slice(0, sortAmount);
    }

    setFilteredProducts(sortedProducts);
  }, [productsArray, sortAmount]);


  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').style.overflow = "auto";
  }

  const openModal = (id) => {
    setIsModalOpen(true);
    setSelectedProductId(id);
    document.querySelector('body').style.overflow = "hidden";
  }

  const addToCart = (id, quantity) => {
    dispatch(addProductToCart(id, quantity));
    setIsAlertActive(true);
    setAlertText("Product was added successfully");
    setTimeout(() => {
      setIsAlertActive(false);
      setAlertText("");
    }, 2000);
  }

  return (
    <>
    <div className="products-list">
        {filteredProducts.map(product => {
          return <ProductCard onClick={openModal} key={product.id} product={product}/>
        })}
    </div>
      {products.find(product => product.id === selectedProductId) &&  isModalOpen ? <ProductModal closeModal={closeModal} addToCart={addToCart} product={products.find(product => product.id === selectedProductId)} /> : ""}
      <Alert className={isAlertActive !== null ? (isAlertActive ? "active" : "inactive") : ""} text={alertText} />
    </>
  )
}

ProductsList.propTypes = {
  productsArray: PropTypes.array.isRequired,
  sortAmount: PropTypes.number,
}

ProductsList.defaultProps = {
  sortAmount: null,
}