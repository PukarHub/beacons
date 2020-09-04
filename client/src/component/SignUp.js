import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Beacons from "../images/beacons.PNG";

// import ForgotPassword from './ForgotPassword'

const SignUp = ({ history }) => {
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
    firebase.auth().signInWithPopup(provider);
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

  return (
    <div>
      <form onSubmit={handleSignUp} className="signupform">
        <h1 id="signin">Sign in</h1>
        <p>
          {" "}
          <strong>Not sure how to sign in?</strong>{" "}
        </p>
        <p>
          <strong>
            Click{" "}
            <Link id="link" to="/">
              {" "}
              here
            </Link>
          </strong>
        </p>{" "}
        <br />
        <button id="googlebtn" onClick={SignInWithGoogle}>
          <span>
            <i class="fab fa-google"></i>{" "}
          </span>
          Sign in with Google
        </button>{" "}
        <br />
        <button id="facebookbtn" onClick={SignInWithFacebook}>
          <span>
            <i class="fab fa-facebook-square"></i>
          </span>
          Sign in with Facebook
        </button>{" "}
        <br />
        <h4>
          {" "}
          <div id="or">or</div>{" "}
        </h4>
        <div id="box">
          <div>
            <input name="email" type="email" required />
            <label>Email</label>
          </div>
          <div>
            <input name="password" type="password" required />
            <label>Password</label>
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
      </form>
      <div id="img">
        <Link>
          <img src={Beacons} alt="loading..." />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
