import baseURL from "../../utils.js";

export const getDiscounts = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/discounts`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillDiscounts(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillDiscounts(arr) {
  return {
    type: "GET_ALL_DISCOUNTS",
    payload: arr ? arr : [],
  };
}