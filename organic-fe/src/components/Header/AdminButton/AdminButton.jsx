import "./AdminButton.scss";
import adminIcon from "./icon.png";
import {NavLink} from "react-router-dom";

export default function AdminButton () {
  return (
    <NavLink to="/admin" className="admin-icon__wrapper">
      <img src={adminIcon} alt="person icon"/>
    </NavLink>
  )
}