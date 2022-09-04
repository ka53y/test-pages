import LogOut from "./LogOut";
import NavBar from "./Navbar";
import { NavLink } from "react-router-dom";

function Home() {
    return (  
        <div className="App"> 

        <NavBar />
        <LogOut />
        <div className="content">
          <h3 style={{textAlign: 'center'}}>MAIN FADI HOME PAGE</h3>
          <div className="homelinks">
            <NavLink
      to="/FlyOutPage"><h4 style={{padding: '50px', border: '1px solid', borderRadius: '25px'}}>Flyout Page</h4></NavLink>
            <a href="/"><h4 style={{padding: '50px', border: '1px solid', borderRadius: '25px'}}>Aircrafat Status Page</h4></a>
            <NavLink
      to="/ImageProcessing"><h4 style={{padding: '50px', border: '1px solid', borderRadius: '25px'}}>Image Processing</h4></NavLink>
          </div>
        </div>
      </div>
    );
}

export default Home;