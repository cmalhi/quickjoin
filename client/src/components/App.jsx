import React from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import GameForm from './GameForm.jsx';
import Match from './Match.jsx';
import Nav from './Nav.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: [],
    };
  }

  render() {
      return(
        <BrowserRouter>
          <div>
            <div className="title">QuickJoin</div>
            <Route component={Nav} />
            <Route path='/home' render={() => <h1>Replace me with a home page description</h1>}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/gameform' component={GameForm} />
            <Route path='/match' component={Match} />
          </div>
        </BrowserRouter>
      ) 
  }
}

export default App;