import React, { Component } from 'react';

import Songs from './Songs'



class SongContainer extends Component {

  constructor() {
    super()
    this.state = {
    months: [Date('2019-12-01'), Date('2019-11-01')]
    }
  }

    render() {
       const songs = this.props.songs.map(song => <Songs key={song.id} song={song} />)
        return (
          <div>
            <h2>My Songs</h2>
         {songs}    
          </div>
        );
    }
  }
    export default SongContainer;
