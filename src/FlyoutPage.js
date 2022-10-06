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
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
          <li><select style={{padding: '10px', width: '200px', height: '50px', border: '1px solid', borderRadius: '25px'}}>
            <option value="none">T/M/S Selection</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '200px', height: '50px', border: '1px solid', borderRadius: '25px'}}>
            <option value="none">Year Selection</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '200px', height: '50px', border: '1px solid', borderRadius: '25px'}}>
            <option value="none">Month Selection</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '200px', height: '50px', border: '1px solid', borderRadius: '25px'}}>
            <option value="none">Location Selection</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            </ul>
        <ul className="center" style={{display: "inline-block"}}>
            <input class="btn1" type="radio" value="To/LandSame" name="location" /> LandSame
            <input class="btn2" type="radio" value="To/LandDiff" name="location" /> LandDiff
            <input class="btn3" type="radio" value="International" name="location" /> International
        </ul>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <li><h4 style={{padding: '20px', width: '1000px', height: '45px', border: '1px solid', }}>Flight Selection</h4></li>
        </ul>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
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