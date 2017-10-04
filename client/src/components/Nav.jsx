import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/gameform">GameForm</Link>
            <Link to="/match">Match</Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;