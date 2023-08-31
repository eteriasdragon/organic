import "./About.scss";
import AboutItem from "./AboutItem/AboutItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAboutList} from "../../redux/actions/products.js";
import {Button} from "../../components/index.js";

export default function About() {

  const aboutList = useSelector((state) => state.about.aboutList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutList());
  }, [dispatch]);

  return <section className="about-section">
    <div className="about-section__inner-container">
      <div className="about-section__info">
      <p className="about-section__subheading">About Us</p>
      <h3 className="about-section__heading">We Believe in Working Accredited Farmers</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="about-section__descr">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className="about-section__about-list">
          {aboutList.map((item, id) => {
            return <AboutItem key={id} title={item.title} text={item.text} url={item.url}/>;
          })}
        </div>
      <Button style="default" text="Shop Now"/>
      </div>
    </div>
  </section>
}