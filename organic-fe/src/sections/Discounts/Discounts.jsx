import "./Discounts.scss";
import DiscountsItem from "./DiscountItem/DiscountItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getDiscounts} from "../../redux/actions/discounts.js";

export default function Discounts () {

  const discounts = useSelector((state) => state.discounts.discountsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  return (
    <section className="discounts-section">
      <div className="discounts-section__inner-container">
        {discounts.map((sale, id) => {
          return <DiscountsItem key= {id} category={sale.category} title={sale.title} url={sale.url} type={sale.type} />
        })}
      </div>
    </section>
  )
}