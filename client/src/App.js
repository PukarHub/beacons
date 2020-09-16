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
import DigitalStore from './pages/home/digitalstore/digitalStore'
import Comission from './pages/home/taking comission/Comission'
import Link from './pages/home/levellinks/Links'
import Blog1 from './pages/blogs/blog1/Blog1'
import Blog2 from './pages/blogs/blog2/Blog2'



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path ="/" component={Profile} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signUp" component={SignUp} />
          <Route exact path ="/home" component={Home} />
          <Route exact path ="/digitalstore" component={DigitalStore} />
          <Route exact path ="/comission" component={Comission} />
          <Route exact path ="/link" component={Link} />
          <Route exact path ="/blog1" component={Blog1} />
          <Route exact path ="/blog2" component={Blog2} />
          <Route exact path ="/forgotpassword" component={ForgotPassword} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
