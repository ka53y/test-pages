import React, { Component } from 'react';
import NavBar from './Navbar';
import LogOut from './LogOut';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class MultipleImageUploadComponent extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
      
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    render() {
        return (
            <div>
                        <div className="App"> 

<NavBar />
<LogOut />
<div className="content">
  <h3 style={{textAlign: 'center'}}>Image Processing Dashboard</h3>
  <h3 style={{textAlign: 'center'}}><div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div></h3>
                <NavLink
      to="/ImageReview"
      className="menu-item"><h3 style={{textAlign: 'center'}}><button> Images Ready for Review</button></h3></NavLink>
      <h3 style={{textAlign: 'center'}}><button> Processed/Approved Images</button></h3>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
            <ol>
            <li>
                <input  type="checkbox" id="topping" name="topping" value="Paneer" />Face Known
            </li>
            <li><input type="checkbox" id="topping" name="topping" value="Paneer" />Face Unknown
            </li>
            <li><input type="checkbox" id="topping" name="topping" value="Paneer" />Outdoor
            </li>
            <li>
            <input type="checkbox" id="topping" name="topping" value="Paneer" />Vehicle
            </li>
            <li><input type="checkbox" id="topping" name="topping" value="Paneer" />Weapon
            </li>
            <li>
            <input type="checkbox" id="topping" name="topping" value="Paneer" />Masked
            </li>
            <li>
            <input type="checkbox" id="topping" name="topping" value="Paneer" />Unknown
            </li>
            </ol>
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            <li>
            <h4 style={{padding: '20px', width: '400px', height: '200px', border: '1px solid', borderRadius: '25px'}}><div><div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
    </div></div></h4>
            </li>
            <ol>
                <li>
                <h4 style={{padding: '5%', width: '200px', height: '40%', border: '1px solid', borderRadius: '25px'}}>Save</h4>
                </li>
                <li>    
                <h4 style={{padding: '5%', width: '200px', height: '40%', border: '1px solid', borderRadius: '25px'}}>Delete</h4>
                </li>
                <li>
                <h4 style={{padding: '5%', width: '200px', height: '40%', border: '1px solid', borderRadius: '25px'}}>Process/Forward</h4>
                </li>
            </ol>
        </ul>
        <div className="content">
  <h3 style={{textAlign: 'center'}}>Image Analysis Results</h3></div>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Face Known</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Face Unknown</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Outdoor</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Vehicle</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Weapon</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Masked</h4></li>
            <li><h4 style={{padding: '5%', width: '150px', height: '150px', border: '1px solid', borderRadius: '25px'}}>Unknown</h4></li>
        </ul>
</div>
</div>

            </div>
        )
    }
}