import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import "./CartList.scss";
import CartItem from "./CartItem/CartItem.jsx";
import {fetchAllProducts} from "../../redux/actions/products.js";
import Button from "../Button/Button.jsx";
import {getProductsInCart, removeProductFromCart} from "../../redux/actions/cart.js";
import Alert from "../Alert/Alert.jsx";
import OrderForm from "../OrderForm/OrderForm.jsx";

export default function CartList () {
  const cartArr = useSelector((state) => state.cart.cartArr);
  const products = useSelector((state) => state.products.productsArr);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);
  const dispatch = useDispatch();

  const totalCartSummary = cartArr.reduce((result, cartItem) => {
    const product = products.find(product => product.id === cartItem.id);

    if (product) {
      result.totalPrice += product.price * cartItem.quantity;

      if(product.discount) {
        result.totalDiscount += (product.price * product.discount / 100) * cartItem.quantity;
      }
    }
    return result;
  }, { totalPrice: 0, totalDiscount: 0 });


  useEffect(() => {
    dispatch(getProductsInCart());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const removeFromCart = (id) => {
    dispatch(removeProductFromCart(id));
    setIsAlertActive(true);
    setAlertText("Product was removed successfully");

    setTimeout(() => {
      setIsAlertActive(false);
      setAlertText("");
    },2000);
  };

  return (
    <section className="cart-list-section">
      <div className="cart-list-section__inner-container">
        {cartArr.map(item => {
          return products[item.id] ? <CartItem key={item.id} quantity={item.quantity} product={products.find(product => product.id === item.id)} removeFromCart={removeFromCart}/> : "";
        })}
        <div className="cart-list-section__summary">
          <p className="cart-list-section__summary-total">Total Cost<span>{(totalCartSummary.totalPrice - totalCartSummary.totalDiscount).toFixed(2)}$</span></p>
          <p className="cart-list-section__summary-discount">Discount<span>{totalCartSummary.totalDiscount.toFixed(2)}$</span></p>
        </div>
        {isOrdering ? <OrderForm /> : <Button style="default" text="To order" onClick={() => setIsOrdering(true)}/>}
      </div>
      <Alert className={isAlertActive !== null ? (isAlertActive ? "active" : "inactive") : ""} text={alertText} />
    </section>
  )
}