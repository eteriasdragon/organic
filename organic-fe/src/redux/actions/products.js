import {productsActionTypes as productsTypes} from "../types.js";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/products`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillProducts(results));
  } catch (err) {
    console.log(err);
  }
};
export function fillProducts(products) {
  return {
    type: productsTypes.getAllProducts,
    payload: products ? products : [],
  };
}