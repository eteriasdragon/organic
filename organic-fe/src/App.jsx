import './App.css';
import { Routes, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getProductsInCart} from "./redux/actions/cart.js";
import {Footer, Header} from "./components/index.js";
import {Admin, Cart, Home, Thanks, Error} from "./pages/index.js";
import NotFound from "./components/Notfound/Notfound.js";


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
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App;
