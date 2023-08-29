import {productsActionTypes as productsTypes, productsActionTypes} from "../types.js";

export const getProductsInCart = () => async (dispatch) => {
  try {
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    if(!cartArr) localStorage.setItem('cart', JSON.stringify([]));
    dispatch(fillCart(cartArr));
  } catch (err) {
    console.log(err);
  }
};

export function fillCart(arr) {
  return {
    type: productsActionTypes.getProductsInCart,
    payload: arr ? arr : [],
  };
}

export function removeProductFromCart(id) {
  return {
    type: productsTypes.removeProductFromCart,
    payload: id,
  };
}

export function addProductToCart(id, quantity) {
  return {
    type: productsTypes.addProductToCart,
    payload: {id, quantity},
  };
}
