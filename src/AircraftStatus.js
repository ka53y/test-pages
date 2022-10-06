import NavBar from "./Navbar";
import LogOut from "./LogOut";
const AircraftStatus = () => {    
    return (
      <div className="App"> 

        <NavBar />
        <LogOut />
        <div className="content">
          <div className="homelinks">
            </div>
        </div>
        <div className="center">
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
            <li><select style={{padding: '10px', width: '350px', height: '50px', border: '1px solid', borderRadius: '25px', lineHeight: '50px'}}>
            <option value="none">Filtering by Location</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '350px', height: '50px', border: '1px solid', borderRadius: '25px', lineHeight: '50px'}}>
            <option value="none">Filtering by System</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '350px', height: '50px', border: '1px solid', borderRadius: '25px', lineHeight: '50px'}}>
            <option value="none">Filtering by W/C</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            </ul>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
            <ol>
            <li><select style={{padding: '10px', width: '300px', height: '50px', border: '1px solid', borderRadius: '25px' , lineHeight: '50px'}}>
            <option value="none">T/M/S</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
            <li><select style={{padding: '10px', width: '300px', height: '40px', border: '1px solid', borderRadius: '25px' , lineHeight: '25px'}}>
            <option value="none">BUNO/Side #</option>
            <option value="test">test</option>
            <option value="test">test</option>
            </select></li>
                <li>
                <input class="btn1" type="radio" value="To/LandSame" name="location"/> up / FMC Status
                </li>
                <li>
                <input class="btn1" type="radio" value="To/LandSame" name="location"/> Down / NMC Status
                </li>
                <li>
                <input class="btn1" type="radio" value="To/LandSame" name="location"/> Partial/ PMC Status
                </li>
                <li>
                <input class="btn1" type="radio" value="To/LandSame" name="location"/> Future Development
                </li>
            </ol>
            <li>
            <h1 style={{padding: '20px', width: '900px', height: '500px', border: '1px solid', borderRadius: '25px', lineHeight: '500px'}}>Aircraft Diagram with subsystem overlay</h1>
            </li>
        </ul>
        <ul>
            <h1 style={{padding: '20px', width: '90%', height: '100px', border: '1px solid', borderRadius: '25px', lineHeight: '100px'}}>heat map display</h1>
            </ul>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <li><h4 style={{padding: '20px', width: '250px', height: '75px', border: '1px solid', borderRadius: '25px', lineHeight: '35px'}}><div>MTBT:</div><div>Average Corr ACT time:</div></h4></li>
        <li><h4 style={{padding: '20px', width: '250px', height: '75px', border: '1px solid', borderRadius: '25px', lineHeight: '25px'}}><div>A/C up time in %</div><div>A/C downtime in %</div><div>Total Discrepancies: </div></h4></li>
        <li><h4 style={{padding: '20px', width: '250px', height: '75px', border: '1px solid', borderRadius: '25px', lineHeight: '35px'}}><div>Top 3 by WUC</div><div># of replaced repairables</div></h4></li>
        <li><h4 style={{padding: '20px', width: '250px', height: '75px', border: '1px solid', borderRadius: '25px', lineHeight: '35px'}}>Top 3 Discrepancies</h4></li>
        </ul>


        </div>
      </div>
    );
  }

export default AircraftStatus;