import "./Cart.scss";
import {CartList, CustomHeroBlock} from "../../components/index.js";


export default function Cart () {

  return (
    <main>
      <CustomHeroBlock title="Cart" backgroundSrc="https://i.ibb.co/JH6wjzT/cart-background.png" additionalDecorSrc="https://i.ibb.co/Hd2G35j/cart-grey-icons.png"/>
      <CartList />
    </main>
  )
}