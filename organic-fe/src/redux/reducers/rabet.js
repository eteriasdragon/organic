import {productsActionTypes as productsTypes} from "../types.js";

const initialState = {
  rabetArr: []
};

export function rabet(state = initialState, action) {
  switch (action.type) {
    case productsTypes.getRabet:
      return {
        ...state,
        rabetArr: action.payload,
      };
    default:
      return state;
  }
}
