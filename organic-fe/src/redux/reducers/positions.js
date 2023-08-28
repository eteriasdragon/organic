const initialState = {
  positionsArr: []
};

export function positions(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_POSITIONS":
      return {
        ...state,
        positionsArr: action.payload,
      };

    default:
      return state;
  }
}
