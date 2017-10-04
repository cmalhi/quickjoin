import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import GameForm from './GameForm.jsx';
import Match from './Match.jsx';

class Nav extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-entry">
              <Link to="/login">Login</Link>
            </div>
            <div className="nav-entry">
              <Link to="/signup">Signup</Link>
            </div>
            <div className="nav-entry">
              <Link to="/gameform">GameForm</Link>
            </div>
            <div className="nav-entry">
              <Link to="/match">Match</Link>
            </div>
          </div>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/gameForm" component={GameForm} />
          <Route path="/match" render={()=> <Match />} />
        </div>
      </Router>
    );
  }
}

export default Nav;