import React, { Component } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'
import Iframe from 'react-iframe'



class NowPlaying extends Component {

    render(){
        return (
            <div>
                <h1>
                <Iframe url={'https://open.spotify.com/embed/track/' + this.props.song.uri} 
                        width="300" 
                        height="380" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media" />
                </h1>
            </div>
        )
    }
}

export default NowPlaying;