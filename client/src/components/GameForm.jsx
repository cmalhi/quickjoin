import React from 'react';
import axios from 'axios';
import Match from './Match.jsx';
import config from '../../../config';
import igdb from 'igdb-api-node';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

global['3scaleKey'] = config.IGDBKey;
const client = igdb();

class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      games: null,
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMatchGet = this.handleMatchGet.bind(this);
    this.handleGameAPICall = this.handleGameAPICall.bind(this);
  }

  componentDidMount() {
    console.log('gameform')
    this.handleGameAPICall();
  }

  handleGameAPICall() {
    axios({
      method: 'GET',
      url: '/gamesapi',
    })
    .then((res) => {
      console.log('ran get request for getting match on front end', res.data);
    })
  }

  handleMatchGet(gamePostObj) {
    var name = gamePostObj.name;
    var system = gamePostObj.system;
    axios({
      method: 'GET',
      url: '/match',
      params: {
        name: name,
        system: system
      }
    })
    .then((res) => {
      console.log('ran get request for getting match on front end', res.data);
      // return (
      //   <Route path="/Match" render={(props) => (
      //     <Match {...props} data={res.data}/>
      //   )}/>
      // )
    })

  }

  handlePost(gamePostObj) {
    axios({
      method: 'POST',
      url: '/games',
      data: gamePostObj
    })
    .then((res) => {
      //this.handleMatchGet(gamePostObj);
      console.log('ran post request for submitting post on front end');
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    var gamePostObj = {};
    gamePostObj.name = this.refs.name.value;
    gamePostObj.system = this.refs.system.value;
    gamePostObj.mic = this.refs.mic.value;
    gamePostObj.gamertag = this.refs.gamertag.value;

    if (this.refs.system.value === 'xbox one') {
      alert('Xbox is garbage fam')
    }
    this.handlePost(gamePostObj);

    //reset all the input fields
    this.refs.name.value = '';
    this.refs.system.value = '';
    this.refs.mic.value = ''; 
    this.refs.gamertag.value = '';
    //after submit you should be ridirected to the Match page
  }

  render() {
    return (
      <div className="form-container">
        <div className="form">
        <div className="form-title">SEARCH FOR PLAYERS</div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              <br />
              <div className="form-element">
                <div>What game are you about to play?</div>
                <input id= "newGameName" type="text" placeholder="Enter name of game" autoFocus ref="name" />
              </div>
              <br />
              <div className="form-element">
                <div>What gaming system are you using?</div>
                <input id= "newGameSystem" type="text" placeholder="Enter name of gaming system" ref="system" />
              </div>
              <br />
              <div className="form-element">
                <div>Do you have a mic?</div>
                <input id= "newGameMic" type="text" placeholder="Are you using a mic" ref="mic" />
              </div>
              <br />
              <div className="form-element">
                <div>Gamertag</div>
                <input id= "newGameGamerTag" type="text" placeholder="Gamertag" ref="gamertag" />
              </div>
              <br />                              
              <input type="submit" value="Submit" />
            </label>
          </form>
        <div>
        <br />
        Click here to check for matches
        <br />
        <button><Link to="/Match">Match</Link></button>
        </div>
      </div>
    </div>
    );
  }
}

export default GameForm;