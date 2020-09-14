import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import {AuthProvider} from './context/Auth'
import PrivateRoute from './PrivateRoute'
import Home from './pages/home/Home'
import Blog1 from './pages/blogs/Blog1'



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path ="/" component={Profile} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signUp" component={SignUp} />
          <Route exact path ="/Home" component={Home} />
          <Route exact path ="/blog1" component={Blog1} />
          <Route exact path ="/forgotpassword" component={ForgotPassword} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
