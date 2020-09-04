import React from 'react'
import Beacons from '../images/beacons.PNG'
import {Link} from 'react-router-dom'
import './ForgotPassword.css'

const Forgotpassword = () => {
    return (
        <div id= "pwreset">
            <h1>Find your account</h1>
            <p>We will email you instructions for resetting your <br/> password.</p>
            <input type="email"/>
            <label>Email</label>
            <br/>
            <button id="resetbtn" type="submit">Reset password</button> 
            <div id="img">
             <Link><img  src={Beacons} alt="loading..."/></Link> 
            </div>
        </div> 
    )
}

export default Forgotpassword;
