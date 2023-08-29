import CustomHeroBlock from "../../components/CustomHeroBlock/CustomHeroBlock.jsx";
import "./Cart.scss";
import CartList from "../../components/CartList/CartList.jsx";

export default function Cart () {

  return (
    <main>
      <CustomHeroBlock title="Cart" backgroundSrc="./src/assets/cart/background.png" additionalDecorSrc="./src/assets/cart/grey-icons.png"/>
      <CartList />
    </main>
  )
}