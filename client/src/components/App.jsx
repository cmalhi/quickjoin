import React from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import GameForm from './GameForm.jsx';
import Match from './Match.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
      <div>
        <div className="title">QuickJoin</div>
        <BrowserRouter>
          <Switch>
            <Route classNam="link" path='/' component={Nav} />
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/gameform' component={GameForm} />
            <Route path='/match' component={Match} />
          </Switch>
        </BrowserRouter>
      </div>
    ) 
  }
}

export default App;