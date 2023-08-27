import "./EcoFriendly.scss";
import prosList from "./ecoFriendly-data.js";
import ListItem from "./ListItem/ListItem.jsx";

export default function EcoFriendly() {
  return (
    <section className="eco-section">
      <img src="./src/assets/eco-friendly/landscape.png" alt="landscape" className="eco-section__img"/>
      <div className="eco-section__inner-container">
        <div className="eco-section__content-wrapper">
          <p className="eco-section__subheading">Eco Friendly</p>
          <h3 className="eco-section__heading">Econis is a Friendly Organic Store</h3>
          <div className="eco-section__pros-list">
            {prosList.map((item, id) => {
              return <ListItem title={item.title} descr={item.descr} key={id}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  )
}