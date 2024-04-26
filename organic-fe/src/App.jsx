import './App.css';
import { Routes, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsInCart} from "./redux/actions/cart.js";
import {Footer, Header, Notfound, ScrollToTop} from "./components/index.js";
import {Admin, Cart, Home, Thanks, Error, Shop, NewsSection} from "./pages/index.js";
import {getAllRabet} from "./redux/actions/rabet.js";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsInCart());
    dispatch(getAllRabet())
  }, [dispatch]);

  const rabet = useSelector((state) => state.rabet.rabetArr);
  console.log(rabet);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/news-page" element={<NewsSection />}/>
      <Route path="/thank-you" element={<Thanks />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Notfound />}/>
    </Routes>
      <Footer/>
      <ScrollToTop />
    </>
  )
}

export default App;
