import "./Footer.scss";
import Logo from "../Logo/Logo.jsx";

export default function Footer() {
  return <footer className="footer">
    <div className="footer__inner-container">
      <div className="footer-info">
        <div className="footer-contacts">
          <p className="footer-contacts__title">Contact Us</p>
          <div className="footer-contacts__section">
            <p className="footer-contacts__section-title">Email</p>
            <a href="mailto:needhelp@Organia.com" className="footer-contacts__section-info">needhelp@Organia.com</a>
          </div>
          <div className="footer-contacts__section">
            <p className="footer-contacts__section-title">Phone</p>
            <a href="tel:66688888" className="footer-contacts__section-info">666 888 888</a>
          </div>
          <div className="footer-contacts__section">
            <p className="footer-contacts__section-title">Address</p>
            <p className="footer-contacts__section-info">88 road, borklyn street, USA</p>
          </div>
        </div>
        <div className="footer-company">
          <Logo/>
          <p className="footer-company__headline">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing
          </p>
          <div className="footer-company__social-wrapper">
            <div className="footer-company__social-item">
              <img src="./src/assets/networks/inst.svg" alt="instagram" className="footer-company__social-item-icon"/>
            </div>
            <div className="footer-company__social-item">
              <img src="./src/assets/networks/fcb.svg" alt="facebook" className="footer-company__social-item-icon"/>
            </div>
            <div className="footer-company__social-item">
              <img src="./src/assets/networks/twit.svg" alt="twitter" className="footer-company__social-item-icon"/>
            </div>
            <div className="footer-company__social-item">
              <img src="./src/assets/networks/pint.svg" alt="pinterest" className="footer-company__social-item-icon"/>
            </div>
          </div>
        </div>
        <nav className="footer-nav">
          <p className="footer-nav__title">
            Utility Pages
          </p>
          <a href="#" className="footer-nav__item">Style Guide</a>
          <a href="#" className="footer-nav__item">404 Not Found</a>
          <a href="#" className="footer-nav__item">Password Protected</a>
          <a href="#" className="footer-nav__item">Licences</a>
          <a href="#" className="footer-nav__item">Changelog</a>
        </nav>
      </div>
      <div className="footer__copy">
        Copyright © <span>Organic</span> | Designed by <span>VictorFlow</span> Templates - Powered
        by <span>Webflow</span>
      </div>
    </div>
  </footer>
}