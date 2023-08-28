const initialState = {
  discountsArr: []
};

export function discounts(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_DISCOUNTS":
      return {
        ...state,
        discountsArr: action.payload,
      };

    default:
      return state;
  }
}
