import baseURL from "../../utils.js";

export const getPositions = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/positions`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillPositions(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillPositions(arr) {
  return {
    type: "GET_ALL_POSITIONS",
    payload: arr ? arr : [],
  };
}