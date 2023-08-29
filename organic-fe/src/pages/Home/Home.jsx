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
  return (
    <main>
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
  )
}