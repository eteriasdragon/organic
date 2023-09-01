import {CustomHeroBlock, ProductsList, SubscribeForm} from "../../components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../../redux/actions/products.js";
import "./Shop.scss";

export default function Shop() {
  const products = useSelector(state => state.products.productsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <section className="shop-section">
      <CustomHeroBlock title="Shop" backgroundSrc="https://i.ibb.co/JH6wjzT/cart-background.png" additionalDecorSrc="https://i.ibb.co/Hd2G35j/cart-grey-icons.png" />
      <div className="shop-section__inner-container">
        <ProductsList productsArray={products} sortAmount={16} />
        <SubscribeForm />
      </div>
    </section>
  )
}