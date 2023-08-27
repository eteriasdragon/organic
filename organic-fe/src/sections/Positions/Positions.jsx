import "./Positions.scss";
import positions from "./positions-data.js";
import PositionItem from "./PositionItem/PositionItem.jsx";

export default function Positions () {
  return(
    <section className="positions-section">
      {positions.map((item, id) => {
        return <PositionItem key={id} imageUrl={item.imageUrl} title={item.title} />
      })}
    </section>
  )
}
