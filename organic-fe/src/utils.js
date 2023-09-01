const baseURL = `${
  window.location.href.includes("localhost")
    ? "http://localhost:3001/"
    : "https://organic-tt0v.onrender.com/"
}`;

export default baseURL;