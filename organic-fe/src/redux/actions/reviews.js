import baseURL from "../../utils.js";

export const getReviews = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/reviews`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillReviews(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillReviews(arr) {
  return {
    type: "GET_ALL_REVIEWS",
    payload: arr ? arr : [],
  };
}