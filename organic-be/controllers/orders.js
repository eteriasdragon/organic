import {addNewOrder, getAllOrders} from "../helpers/orders.js";
import Order from "../models/order.js";

export const getOrdersList = async (req,res) => {
  const ordersList = await getAllOrders();
  res.send(ordersList);
}

export const pushNewOrder = async (req,res) => {
  try {
    await addNewOrder(new Order(req.body));
    res.send(req.body);
  } catch (e) {
    console.log(e);
  }
}