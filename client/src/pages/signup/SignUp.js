import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Beacons from "../../images/beacons.PNG";

const SignUp = ({ history }) => {
  const [show, setShow] = React.useState(false);
  const [home, setHome] = React.useState(true)
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const SignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
   const result = firebase.auth().signInWithPopup(provider);
   console.log(result)
    try {
      await app.auth();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const SignInWithFacebook = async () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        app.auth();
        history.push("/");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, errorMessage, email, credential);
        console.log(error);
      });
  };

  const ShowComponent = () => (
    <div id="here">
    <h1 id="signin">Sign in</h1>
    <p>
      {" "}
      <strong>Not sure how to sign in?</strong>{" "}
    </p>
    <p id='p'>
      <strong>
        Click{" "}
        <Link id="link" to='/signUp' onClick={toggleShow} >
          {" "}
          here.
        </Link>
      </strong>
    </p>{" "}
    <br />
    <p id="p2">Enter your Beacons username below. <br/> We'll tell you how to sign in.</p>
    <div className="user-input-wrp">
              <input
                type="text"
                name="name"
                className="inputText"
                required
              />
              <span className="floating-label">Username</span>
            </div>
        <button id="retrievebtn" type="submit">Retrieve sign in method</button>  <br/> <br/>
        <Link id="link" to="/signUp" onClick={toggleHome}>Back to sign in.</Link> <br/> <br/>
        <p id="link" >Don't have an account? <Link id="link" to="/">Join the waitlist</Link> </p>
       <div id="img">
        <Link to="/"><img  src={Beacons} alt="loading..."/></Link> 
        </div>
  </div> 
  )

  const toggleShow = () => {
    setShow(true);
    setHome(false);
  }

  const toggleHome = () => {
    setHome(true);
    setShow(false);
  }



  const HomeComponent =  () => (
    <form onSubmit={handleSignUp} className="signupform">
    <h1 id="signin">Sign in</h1>
    <p>
      {" "}
      <strong>Not sure how to sign in?</strong>{" "}
    </p>
    <p id='p'>
      <strong>
        Click{" "}
        <Link id="link" to='/signUp' onClick={toggleShow} >
          {" "}
          here.
        </Link>
      </strong>
    </p>{" "}
    <br />
    
     <div id="box2">

        <button id="googlebtn" onClick={SignInWithGoogle}>
          <span>
            <i className="fab fa-google"></i>{" "}
          </span>
          Sign in with Google
        </button>{" "}
        <br />
        <button id="facebookbtn" onClick={SignInWithFacebook}>
          <span>
            <i className="fab fa-facebook-square"></i>
          </span>
          Sign in with Facebook
        </button>{" "}
        <br />
        <h4>
          {" "}
          <div id="or">or</div>{" "}
        </h4>
        <div id="box" >
          <div className="user-input-wrp">
            <input name="email" type="email" required  className="inputText" />
            <label className="floating-label" >Email</label>
          </div>
          <div className="user-input-wrp">
            <input name="password" type="password" required  className="inputText" />
            <label className="floating-label" >Password</label>
          </div>
        </div>
        <button id="submitbtn" type="submit">
          Sign in with Email
        </button>{" "}
        <br /> <br /> <br />
        <Link id="link" to="/forgotpassword">
          Forgot password?
        </Link>{" "}
        <br /> <br />
        <p id="link">
          Don't have an account?{" "}
          <Link id="link" to="/">
            Join the waitlist
          </Link>{" "}
        </p> 
      <div id="img">
        <Link to="/" >
          <img src={Beacons} alt="loading..." />
        </Link>
      </div> 
    </div>
  </form>
  )

  
  

  return (
    <div>
    {home ? <HomeComponent /> : null}
    {show ? <ShowComponent /> :null}
  
    </div>
  );
};

export default withRouter(SignUp);
