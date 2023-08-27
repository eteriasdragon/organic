import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../../redux/actions/products.js";
import {
  HeroBlock,
  Discounts,
  About,
  Testimonials,
  EcoFriendly,
  Positions,
  News,
  OurProducts,
} from '../../sections';
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm.jsx";
import WeOffer from "../../sections/WeOffer/WeOffer.jsx";


export default function Home () {
  return <main>
    <HeroBlock/>
    <Discounts />
    <About />
    <OurProducts />
    <Testimonials />
    <WeOffer category="vegetable" />
    <EcoFriendly/>
    <Positions />
    <News />
    <SubscribeForm />
  </main>
}