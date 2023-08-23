import {NavLink} from "react-router-dom";
import "./NavItem.scss";
import PropTypes from "prop-types";

export default function NavItem({title, url}) {
  return <NavLink className="nav-item" to={url}>
    {title}
  </NavLink>
}

NavItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}