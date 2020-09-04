import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';
import ForgotPassword from './component/ForgotPassword'
import {AuthProvider} from './context/Auth'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path ="/" component={Home} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signUp" component={SignUp} />
          <Route exact path ="/forgotpassword" component={ForgotPassword} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
