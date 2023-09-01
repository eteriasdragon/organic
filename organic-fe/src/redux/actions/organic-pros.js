import baseURL from "../../utils.js";

export const getOrganicPros = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/organic-pros`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillOrganicPros(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillOrganicPros(arr) {
  return {
    type: "GET_ALL_ORGANIC_PROS",
    payload: arr ? arr : [],
  };
}