import {productsActionTypes} from "../types.js";

const initialState = {
  ordersList: []
};

export function orders(state = initialState, action) {

  switch (action.type) {

    case productsActionTypes.getAllOrders:
      return {
        ...state,
        ordersList: action.payload,
      };

    case productsActionTypes.addNewOrder:
      return {
        ...state,
        ordersList: [...state.ordersList, action.payload],
      };

    default:
      return state;
  }
}
