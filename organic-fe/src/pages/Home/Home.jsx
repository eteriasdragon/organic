import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../../redux/actions/products.js";
import HeroBlock from "../../components/sections/HeroBlock/HeroBlock.jsx";
import Discounts from "../../components/Discounts/Discounts.jsx";
import About from "../../components/sections/About/About.jsx";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm.jsx";
import Testimonials from "../../components/sections/Testimonials/Testimonails.jsx";

export default function Home () {
  const products = useSelector((state) => state.products.productsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <main>
    <HeroBlock/>
    <Discounts />
    <About />
    <Testimonials />
    <SubscribeForm />
  </main>
}