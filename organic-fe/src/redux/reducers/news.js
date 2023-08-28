const initialState = {
  newsArr: []
};

export function news(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_NEWS":
      return {
        ...state,
        newsArr: action.payload,
      };

    default:
      return state;
  }
}
