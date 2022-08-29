import NavBar from "./Navbar";
import LogOut from "./LogOut";
const FlyOutPage = () => {    
    return (
      <div className="App"> 

        <NavBar />
        <LogOut />
        <div className="content">
          <h3 style={{textAlign: 'center', padding: '10px'}}>Fly Out Page</h3>
          <div className="homelinks">
            </div>
        </div>
        <div className="center">
        <ul>
            <li><h4 style={{padding: '10px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>T/M/S Selection</h4></li>
            <li><h4 style={{padding: '10px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Year Selection</h4></li>
            <li><h4 style={{padding: '10px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Month Selection</h4></li>
            <li><h4 style={{padding: '10px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Location Selection</h4></li>
        </ul>
        <ul>
            <input type="radio" value="To/LandSame" name="location" /> LandSame
            <input type="radio" value="To/LandDiff" name="location" /> LandDiff
            <input type="radio" value="International" name="location" /> International
        </ul>
        <ul>
        <li><h4 style={{padding: '20px', width: '1000px', height: '45px', border: '1px solid'}}>Flight Selection</h4></li>
        </ul>
        <ul>
            <ol>
                <li>
                <h4 style={{padding: '20px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Time Index</h4>
                </li>
                <li>    
                <h4 style={{padding: '20px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Flight Progress Bar</h4>
                </li>
                <li>
                <h4 style={{padding: '20px', width: '200px', height: '25px', border: '1px solid', borderRadius: '25px'}}>Play / Pause / Stop / Reset </h4>
                </li>
            </ol>
            <li>
            <h4 style={{padding: '20px', width: '700px', height: '400px', border: '1px solid', borderRadius: '25px'}}>Flight Animation Window</h4>
            </li>
        </ul>

        </div>
      </div>
    );
  }

export default FlyOutPage;