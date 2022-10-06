import NavBar from './Navbar';
import LogOut from './LogOut';
import { NavLink } from "react-router-dom";
function PageNotFound() {
    return (  
        <main>
                    <NavBar />
        <LogOut />
            <h3 className='centert'>Page not found. Please navigate back to the home page from the taskbar or by using <NavLink
      to="/"
      className="menu-item">This</NavLink> link.</h3>
        </main>
    );
}

export default PageNotFound;