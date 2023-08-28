const initialState = {
  aboutList: []
};

export function about(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_ABOUT":
      return {
        ...state,
        aboutList: action.payload,
      };

    default:
      return state;
  }
}
