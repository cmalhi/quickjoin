import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import GameForm from './GameForm.jsx';
import Match from './Match.jsx'

class Nav extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Signup">Signup</Link></li>
              <li><Link to="/GameForm">GameForm</Link></li>
              <li><Link to="/Match">Match</Link></li>
            </ul>
          </div>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/GameForm" component={GameForm} />
          <Route path="/Match" render={()=> <Match />} />
        </div>
      </Router>
    );
  }
}

export default Nav;