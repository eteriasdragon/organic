import {menuList} from "./header-config.js";
import NavItem from "./NavItem/NavItem.jsx";
import SearchIcon from "./SearchIcon/SearchIcon.jsx";
import CartButton from "./CartButton/CartButton.jsx";
import "./Header.scss";
import AdminButton from "./AdminButton/AdminButton.jsx";
import {Logo} from "../index.js";

export default function Header() {

  return (
    <header className="header">
      <div className="header__inner-container">
        <Logo/>
        <nav className="header__nav">
          {menuList.map((item, id) => {
            return <NavItem className="header__nav-item" key={id} title={item.title.charAt(0).toUpperCase() + item.title.slice(1)} url={item.url}/>
          })}
        </nav>
        <SearchIcon className="header__search"/>
        <CartButton className="header__cart"/>
        <AdminButton className="header__admin" />
      </div>
    </header>
  )
}