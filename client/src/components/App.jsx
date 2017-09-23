import React from 'react';
import axios from 'axios';
import GameForm from './GameForm.jsx';
import Login from './Login.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: [],
    };
  }

  // conditional rendering currently not working 
  render() {
      return(
        <Nav />
      ) 
  }
}

export default App;