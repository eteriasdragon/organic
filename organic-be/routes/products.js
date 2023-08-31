import {getAllProducts} from "../helpers/getAllProducts.js";
import express from "express";

const app = express();

app.get('/products', async function(req, res) {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});