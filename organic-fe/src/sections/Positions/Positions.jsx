import "./Positions.scss";
import PositionItem from "./PositionItem/PositionItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrganicPros} from "../../redux/actions/products.js";

export default function Positions () {

  const positions = useSelector((state) => state.positions.positionsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrganicPros());
  }, [dispatch]);

  return(
    <section className="positions-section">
      {positions.map((item, id) => {
        return <PositionItem key={id} imageUrl={item.imageUrl} title={item.title} />
      })}
    </section>
  )
}
