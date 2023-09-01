import baseURL from "../../utils.js";
import {productsActionTypes as productsTypes} from "../types.js";

export const getAllOrders = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/orders`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillOrders(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillOrders(arr) {
  return {
    type: "GET_ALL_ORDERS",
    payload: arr ? arr : [],
  };
}

export const addNewOrder = order => async(dispatch) => {
  const newOrder = await fetch(`${baseURL}/orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
    .then(data => data);
  dispatch(fillNewOrder(newOrder));
}

export function fillNewOrder(order) {
  return {
    type: productsTypes.addNewOrder,
    payload: order,
  };
}