const initialState = {
  organicProsArr: []
};

export function organicPros(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_ORGANIC_PROS":
      return {
        ...state,
        organicProsArr: action.payload,
      };

    default:
      return state;
  }
}
