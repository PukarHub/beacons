import React from 'react'
import Beacons from '../images/beacons.PNG'
import {Link} from 'react-router-dom'

const Help = () => {
    return (
        <div>
            <p>Enter your Beacons username below. <br/> We'll tell you how to sign in.</p>
            <input type="email"/>
            <label>Email</label>
            <button id="retrievebtn" type="submit">Retrieve sign in method</button> 
            <Link id="link" to="/signUp">Back to sign in.</Link> <br/> <br/>
            <p id="link" >Don't have an account? <Link id="link" to="/">Join the waitlist</Link> </p>
           <div id="img">
            <Link to="/"><img  src={Beacons} alt="loading..."/></Link> 
          </div>
        </div>
    )
}

export default Help
