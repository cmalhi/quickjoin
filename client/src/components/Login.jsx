import React from 'react'
import Signup from './Signup.jsx'
import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { promisify } from 'bluebird';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameTaken: false,
      signedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePpost = this.handlePost.bind(this);
  }

  handlePost(userObj) {
    axios({
      method: 'POST',
      url: '/login',
      data: userObj,
    })
    .then((res) => {
      console.log('ran post request for submitting login info on front end', res.data);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    //grab username data from refs
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    var userObj = {
      username: username,
      password: password,
    }
    this.handlePost(userObj);
    //check if usename exists
    //if exists hash and salt password and sign in 
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  render() {
    return (
      <div className="form-container">
        <div className=" form">
          <div className="login-title">LOG INTO QUICKJOIN</div>
          <br />
          <form onSubmit={this.handleSubmit} className="login-form">        
            <label>
              <br />
              <div className="login-form-text">Enter your username</div>
              <input id="loginUsername" type="text" autoFocus placeholder="enter your username" ref="username" />
              <br />
              <br />
              <div className="login-form-text">Enter your password</div>
              <input id="loginPassword" type="password" placeholder="enter your password" ref="password" />
              <br />
              <input type="submit" value="Submit" className="login-submit"/>
            </label>
          </form>
          <br />
          <button><Link to="/Signup">Signup</Link></button>
          <br />
        </div>
      </div>
    )
  }
}

export default Login;