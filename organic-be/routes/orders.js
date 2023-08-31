import {addNewOrder, getAllOrders} from "../helpers/orders.js";
import Order from "../models/order.js";
import express from "express";

const app = express();

app.get('/orders', async function(req, res) {
  const ordersList = await getAllOrders();
  res.send(ordersList);
});

app.post('/orders', async function(req, res){
  try {
    await addNewOrder(new Order(req.body));
    res.send(req.body);
  } catch (e) {
    console.log(e);
  }
})