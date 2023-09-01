import baseURL from "../../utils.js";

export const getAboutList = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/about`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillAboutList(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillAboutList(arr) {
  return {
    type: "GET_ALL_ABOUT",
    payload: arr ? arr : [],
  };
}