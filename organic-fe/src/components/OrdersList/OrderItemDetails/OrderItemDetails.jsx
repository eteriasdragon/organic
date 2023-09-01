import "./OrderItemDetails.scss";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../../../redux/actions/products.js";
import Row from "./DetailsRow/DetailsRow.jsx";

export default function OrderItemDetails({order, creds}) {
  const products = useSelector(store => store.products.productsArr);
  const dispatch = useDispatch();

  const {customer, phone, address, email, addInfo} = creds;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="order-wrapper">
      <div className="order-details">
        <div className="order-details__info-header">
          <div className="order-details__info-header-main">Product</div>
          <div className="order-details__info-header-price">Price</div>
          <div className="order-details__info-header-amount">Amount</div>
          <div className="order-details__info-header-total">Total</div>
        </div>
        {order.map(position => {
          return products.length ? <Row key={position.id} position={ products.find(product => product.id === position.id)} quantity={position.quantity} /> : null;
        })}
      </div>
      <div className="order-credentials">
        <p className="order-credentials__item"><span>Customer: </span> {customer}</p>
        <p className="order-credentials__item"><span>Email: </span> {email}</p>
        <p className="order-credentials__item"><span>Phone: </span> {phone}</p>
        <p className="order-credentials__item"><span>Address: </span> {address}</p>
        <p className="order-credentials__item"><span>Message: </span> <span>{addInfo}</span></p>
      </div>
    </div>
  )
}

OrderItemDetails.propTypes = {
  order: PropTypes.array.isRequired,
  creds: PropTypes.object.isRequired,
}