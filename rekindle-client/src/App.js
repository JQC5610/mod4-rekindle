import React, { Component } from "react";
import './App.css';
import * as SpotifyWebApi from 'spotify-web-api-js';

let spotify = new SpotifyWebApi();

class App extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();

    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: "Not Checked",
        image: ''
      }
    }
    if (params.access_token) {
      spotify.setAccessToken(params.access_token)
    }
  }




getHashParams = () => {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
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


    </div> 
  );
}

}

export default App;
