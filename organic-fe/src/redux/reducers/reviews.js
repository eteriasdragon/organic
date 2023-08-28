const initialState = {
  reviewsArr: []
};

export function reviews(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_REVIEWS":
      return {
        ...state,
        reviewsArr: action.payload,
      };

    default:
      return state;
  }
}
