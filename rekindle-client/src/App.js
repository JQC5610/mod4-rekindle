import React, { Component } from "react";
import './App.css';
import TimelineContainer from './TimelineContainer'

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
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: "Not Checked",
        image: ''
      },
      currentSongs: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/time_periods')
    .then(resp => resp.json())
    .then(data => this.setState({ timePeriods: data }))
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

getNowPlaying = () => {
  spotify.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          image: response.item.album.images[0].url
        }
      })
    })
}

getRecentlyPlayed = () => {
  spotify.getMyRecentlyPlayedTracks()
    .then((response) => {
      console.log(response)
    })
};

getMyTopTracks = () => {
  spotify.getMyTopTracks()
    .then((response) => {
      console.log(response)
    })
};

getMySavedTracks = () => {
  // there should be a generate playlist button.
  // The logic should be to check if a users data is in the db already Skip over this is it is.
  // The getMySaved Tracks should run until the dateadded is in 2016
  spotify.getMySavedTracks({limit: 50})
  .then((response) => {
    console.log(response)
    console.log(response.items[0].track.name)
    console.log(response.items[0].track.artists[0].name)
    console.log(response.items[0].track.uri)
    console.log(response.items[0].added_at)
    console.log(this.getHashParams())
    console.log(window)
  })
}

getMySavedTrackswPost = () => {
 spotify.getMySavedTracks({limit: 50})
  .then((response) => {
    console.log(response)
    console.log(response.items[0].track.name)
    console.log(response.items[0].track.artists[0].name)
    console.log(response.items[0].track.uri)
    console.log(response.items[0].added_at)
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


render() {
  return (
      <div className="App">
        <a href='http://localhost:8888'>
          <button>Login with Spotify</button>
        </a>
          <div>
            Now Playing: { this.state.nowPlaying.name } 
          </div>
          <div>
            <img src = {this.state.nowPlaying.image} style={{ width: 100}}/>
          </div>
          <button onClick={() => this.getNowPlaying()}>
            Now Playing
          </button>
          <button onClick={() => this.getRecentlyPlayed()}>
            Recent Songs
          </button>
          <button onClick={() => this.getMyTopTracks()}>
            Top Tracks
          </button>
          <button onClick={() => this.getMySavedTracks()}>
            Saved Tracks
          </button>
          <button onClick={() => this.getMySavedTrackswPost()}>
            Saved Tracks with post
          </button>
        <TimelineContainer timePeriods={this.state.timePeriods}/>
      </div> 
  );
  }
}

export default App;
