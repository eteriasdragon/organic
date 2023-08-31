import {
  HeroBlock,
  Discounts,
  About,
  Testimonials,
  EcoFriendly,
  Positions,
  News,
  OurProducts, WeOffer,
} from '../../sections';
import {SubscribeForm} from "../../components/index.js";


export default function Home() {
  return (
    <main>
      <HeroBlock/>
      <Discounts/>
      <About/>
      <OurProducts/>
      <Testimonials/>
      <WeOffer category="vegetable"/>
      <EcoFriendly/>
      <Positions/>
      <News/>
      <SubscribeForm/>
    </main>
  )
}