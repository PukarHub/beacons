import React from 'react'
import Beacons from '../../images/beacons.PNG'
import {Link} from 'react-router-dom'
import './ForgotPassword.css'

const Forgotpassword = () => {
    return (
        <div id= "pwreset">
            <h1>Find your account</h1>
            <p>We will email you instructions for resetting your <br/> password.</p>
            <div className="user-input-wrp">
              <input
                type="text"
                name="name"
                className="inputText"
                required
              />
              <span className="floating-label">Email</span>
            </div>
            <br/>
            <button id="resetbtn" type="submit">Reset password</button> 
            <div id="img">
             <Link to="/"><img  src={Beacons} alt="loading..."/></Link> 
            </div>
        </div> 
    )
}

export default Forgotpassword;
