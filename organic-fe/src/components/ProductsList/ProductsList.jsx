import "./ProductsList.scss";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard/ProductCard.jsx";
import ProductModal from "../ProductModal/ProductModal.jsx";
import {useSelector} from "react-redux";

export default function ProductsList({productsArray, sortAmount}) {
  const products = useSelector((state) => state.products.productsArr);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const addToCart = () => {

  }

  return (
    <>
    <div className="products-list">
        {filteredProducts.map(product => {
          return <ProductCard onClick={openModal} key={product.id} product={product}/>
        })}
    </div>
      {products[selectedProductId] &&  isModalOpen ? <ProductModal closeModal={closeModal} addToCart={addToCart} product={products[selectedProductId]} /> : ""}
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