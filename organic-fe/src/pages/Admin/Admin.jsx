import "./Admin.scss";
import {OrdersList} from "../../components/index.js";


export default function Admin() {

  return (
    <section className="admin">
      <div className="admin__inner-container">
        <h3 className="admin__heading">
          Confirmed orders
        </h3>
        <OrdersList />
      </div>
    </section>
  )
}