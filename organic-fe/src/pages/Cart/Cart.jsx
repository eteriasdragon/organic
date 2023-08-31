import "./Cart.scss";
import {CartList, CustomHeroBlock} from "../../components/index.js";


export default function Cart () {

  return (
    <main>
      <CustomHeroBlock title="Cart" backgroundSrc="./src/assets/cart/background.png" additionalDecorSrc="./src/assets/cart/grey-icons.png"/>
      <CartList />
    </main>
  )
}