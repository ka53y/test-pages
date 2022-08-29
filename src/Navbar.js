import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Support">
        Support
      </a>
      <NavLink
      to="/FlyOutPage"
      className="menu-item">
        Contact Us
      </NavLink>
    </Menu>
     );
}
 
export default NavBar;