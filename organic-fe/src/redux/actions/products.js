import {productsActionTypes as productsTypes} from "../types.js";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/products`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillProducts(results));
  } catch (err) {
    console.log(err);
  }
};
export function fillProducts(products) {
  const filteredProducts = [...products.filter(product => product.discount), ...products.filter(product => !product.discount)]

  return {
    type: productsTypes.getAllProducts,
    payload: filteredProducts ? filteredProducts : [],
  };
}

export const getNews = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/news`)
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

export const getAboutList = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/about`)
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

export const getReviews = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/reviews`)
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

export const getStatistics = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/statistics`)
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

export const getDiscounts = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/discounts`)
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

export const getOrganicPros = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/organic-pros`)
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

export const getPositions = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/positions`)
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

export const getAllOrders = () => async (dispatch) => {
  try {
    const results = await fetch(`http://localhost:3001/orders`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillOrders(results));
  } catch (err) {
    console.log(err);
  }
};

export function fillOrders(arr) {
  return {
    type: "GET_ALL_ORDERS",
    payload: arr ? arr : [],
  };
}

export const addNewOrder = order => async(dispatch) => {
  const newOrder = await fetch(`http://localhost:3001/orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
    .then(data => data);
  dispatch(fillNewOrder(newOrder));
}

export function fillNewOrder(order) {
  return {
    type: productsTypes.addNewOrder,
    payload: order,
  };
}