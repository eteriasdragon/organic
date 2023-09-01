import {productsActionTypes as productsTypes} from "../types.js";
import baseURL from "../../utils.js";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/products`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillProducts(results));
  } catch (err) {
    console.log(err);
  }
};
export function fillProducts(products) {
  const filteredProducts = [...products.filter(product => product.discount), ...products.filter(product => !product.discount)]

  return {
    type: productsTypes.getAllProducts,
    payload: filteredProducts ? filteredProducts : [],
  };
}