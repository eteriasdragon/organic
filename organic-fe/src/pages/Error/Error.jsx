import "./Error.scss";
import Button from "../../components/Button/Button.jsx";

export default function Error() {
  return <div className="notfound">
    <div className="notfound__inner-container">
      <div className="notfound__content">
        <p className="notfound__number">404</p>
        <p className="notfound__heading">Page not found</p>
        <p className="notfound__descr">The page you are looking for doesn't exist or has been moved</p>
        <Button style="default" text="Go to Homepage" navLink="/" />
      </div>
    </div>
  </div>
}