import {productsActionTypes as productsTypes} from "../types.js";

const initialState = {
  productsArr: []
};

export function products(state = initialState, action) {
  switch (action.type) {
    case productsTypes.getAllProducts:
      return {
        ...state,
        productsArr: action.payload,
      };

    default:
      return state;
  }
}
