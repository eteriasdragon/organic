import {getAllProducts} from "../helpers/getAllProducts.js";

export const getProductsList = async (req,res) => {
  const allProducts = await getAllProducts();
  res.send(allProducts);
}