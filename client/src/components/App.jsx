import React from 'react';
import axios from 'axios';
import GameForm from './GameForm.jsx';
import Login from './Login.jsx'
import Nav from './Nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: []
    };
  }

  // componentDidMount() {
  //   var sessionRender = () => (
  //     <div>
  //       <GameForm />
  //     </div>
  //   );
  //   var noSessionRender = () => (
  //     <div>
  //       <Login />
  //     </div>
  //   );
  //   if (this.state.loggedIn) {
  //     this.setState({redirect: sessionRender})
  //     console.log('logged in, so redirect is ', this.state.redirect)
  //   } else {
  //     this.setState({redirect: noSessionRender})
  //     console.log('not logged in, so redirect is ', this.state.redirect)
  //   }
  // }

  // handleRender() {
  //   var sessionRender = (
  //     <div>
  //       <GameForm />
  //     </div>
  //   );
  //   var noSessionRender = (
  //     <div>
  //       <Login />
  //     </div>
  //   );
  //   if (this.state.loggedIn) { return noSessionRender }
  //   else { return sessionRender }
  // }



  // conditional rendering currently not working 
  render() {

      return <Nav />;

  }
}

export default App;