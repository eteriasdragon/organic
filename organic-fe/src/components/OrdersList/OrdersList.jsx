import {Accordion} from "react-accessible-accordion";
import OrderItem from "./OrderItem/OrderItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllOrders} from "../../redux/actions/orders.js";
import 'react-accessible-accordion/dist/fancy-example.css';
import "./OrdersList.scss";

export default function OrdersList() {
  const orders = useSelector(state => state.orders.ordersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch]);

  return(
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
      {orders.map((order) => {
        return <OrderItem key={order.id} details={order} />
      })}
    </Accordion>
  )
}