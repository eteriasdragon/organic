import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getProductsInCart} from "./redux/actions/cart.js";
import Error from "./pages/Error/Error.jsx";
import NotFound from "./components/Notfound/Norfound.js";
import Thanks from "./pages/Thanks/Thanks.jsx";
import Admin from "./pages/Admin/Admin.jsx";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsInCart());
  }, [dispatch]);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/thank-you" element={<Thanks />} />
      <Route path="/error" element={<Error />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App;
