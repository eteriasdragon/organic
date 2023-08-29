import {productsActionTypes as productsTypes} from "../types.js";

const initialState = {
  cartArr: []
};

export function cart(state = initialState, action) {
  switch (action.type) {
    case productsTypes.getProductsInCart:

      return {
        ...state,
        cartArr: action.payload,
      };

    case productsTypes.removeProductFromCart:

      const productIdxToDelete = state.cartArr.findIndex(
        (product) => product.id === action.payload
      );
      const updatedCart = [
        ...state.cartArr.slice(0, productIdxToDelete),
        ...state.cartArr.slice(productIdxToDelete + 1),
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cartArr: updatedCart,
      };

    case productsTypes.addProductToCart:
      const ifExistIdx = state.cartArr.findIndex(product => product.id === action.payload.id);

      if(ifExistIdx >= 0 ) {
        state.cartArr[ifExistIdx].quantity = action.payload.quantity;
        localStorage.setItem("cart", JSON.stringify(state.cartArr));
        return {
          ...state,
          cartArr: [...state.cartArr]
        };
      } else {
        const updatedUniqueCart =  [...state.cartArr, action.payload];
        localStorage.setItem("cart", JSON.stringify(updatedUniqueCart));
        return {
          ...state,
          cartArr: updatedUniqueCart,
        };
      }

    default:
      return state;
  }
}
