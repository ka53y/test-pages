import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <NavLink
      to="/FlyOutPage"
      className="menu-item">
        Fly Out
      </NavLink>
      <NavLink
      to="/ImageProcessing"
      className="menu-item">
        Image Procesing
      </NavLink>
      <a className="menu-item" href="/Support">
        Support
      </a>
      <a className="menu-item" href="/Support">
        Contact Us
      </a>
      
    </Menu>
     );
}
 
export default NavBar;