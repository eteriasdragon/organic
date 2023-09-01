import baseURL from "../../utils.js";

export const getNews = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/news`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillNews(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillNews(arr) {
  return {
    type: "GET_ALL_NEWS",
    payload: arr ? arr : [],
  };
}