const initialState = {
  statisticsArr: []
};

export function statistics(state = initialState, action) {

  switch (action.type) {
    case "GET_ALL_STATISTICS":
      return {
        ...state,
        statisticsArr: action.payload,
      };

    default:
      return state;
  }
}
