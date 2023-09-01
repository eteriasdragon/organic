import baseURL from "../../utils.js";

export const getStatistics = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/statistics`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillStatistics(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillStatistics(arr) {
  return {
    type: "GET_ALL_STATISTICS",
    payload: arr ? arr : [],
  };
}