import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TimelineContainer from './TimelineContainer';
import SongContainer from './SongContainer';
import * as SpotifyWebApi from 'spotify-web-api-js';

let spotify = new SpotifyWebApi();



class App extends React.Component {
    constructor(){
    super();
    const params = this.getHashParams();
    if (params.access_token) {
      spotify.setAccessToken(params.access_token)
    }
    this.state = {
      timePeriods: [],
      currentPeriod: '',
      loggedIn: params.access_token ? true : false,
      currentSongs: [],
      allSongs: [],
      currentUserSpotify: '',
      currentUser: []

    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/time_periods')
    .then(resp => resp.json())
    .then(data => this.setState({ timePeriods: data }))
    .then(this.getUserInfoSpotify())
    .then(this.getUserInfoBackend())
    setTimeout(() => {
      console.log(this.state.currentUserSpotify.display_name)
      console.log(this.state.currentUser)
      if (this.state.currentUser[0]) {
      if (this.state.currentUserSpotify.display_name === this.state.currentUser[0].name) {
        (this.fetchSongs())
      }
      }
      else {
        (this.postUsers())
        setTimeout(() => { 
        (this.getMySavedTrackswPost())
        setTimeout(() => {
          (this.fetchSongs())
        }, 5000)
      }, 1000)
      }
    }, 2000);
  }

  fetchSongs = () => {
    fetch (`http://localhost:3001/songs`)
    .then(r => r.json())
    .then(response => {
      this.setState({
        allSongs: response
      })
    }) 
  }

  getUserInfoSpotify = () => {
    spotify.getMe()
      .then((response) => {
        this.setState({ 
          currentUserSpotify: response
        })
      })
  };

  getUserInfoBackend = () => {
    fetch (`http://localhost:3001/users`)
    .then(r => r.json())
    .then(response => {
      console.log(response)
      console.log(this.state)
      this.setState({
        currentUser: response
      })
    }) 
  }


  postUsers = () => {
    fetch (`http://localhost:3001/users`, {
    method: 'POST',
    headers: {'content-Type': 'application/json',
                "accept": "application/json"
    },
    body: JSON.stringify({
        "name": this.state.currentUserSpotify.display_name,
        "username": this.state.currentUserSpotify.id
      })
    })
   }
  
  
  
  filterSongs = (value) => {
      this.setState({
        currentSongs: this.state.allSongs.filter(song => 
            (new Date(song.favorite_date).getFullYear() === this.state.currentPeriod.getFullYear()) && 
            (new Date(song.favorite_date).getMonth() === this.state.currentPeriod.getMonth())
          )
      })
  }

getHashParams = () => {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}


getMySavedTracks = () => {
  spotify.getMySavedTracks({limit: 50})
  .then((response) => {
    console.log(response)
  })
}

getMySavedTrackswPost = () => {
 spotify.getMySavedTracks({limit: 50})
  .then((response) => {
    this.postSongs(response)
  })
}

postSongs = (response) => {
  
  for (let i=0; i < 50; i++) { 
  fetch (`http://localhost:3001/songs`, {
  method: 'POST',
  headers: {'content-Type': 'application/json',
              "accept": "application/json"
  },
  body: JSON.stringify({
      "name": response.items[i].track.name,
      "artist": response.items[i].track.artists[0].name,
      "uri": response.items[i].track.uri,
      "favorite_date": response.items[i].added_at
    })
  })
 }
}

setDates = (Year, Month) => {
  this.setState({
    currentPeriod: new Date(Year, Month)
  })
  setTimeout(() => { this.filterSongs() }, 1500);
  setTimeout(() => { console.log(this.state) }, 1000);

}



 render() {

  return (
      <div className="App">
        <div>
        <a href='http://localhost:8888'>
          <button>Login with Spotify</button>
        </a>
        </div><br></br>


        {this.state.currentSongs ? 
        <SongContainer songs={this.state.currentSongs}/> : null}
        <TimelineContainer timePeriods={this.state.timePeriods} setDates={this.setDates}/>
      </div> 
  );
  }
}

export default App;
