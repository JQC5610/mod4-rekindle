import React, { Component } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'


class NowPlaying extends Component {

    getUri = () => {
        let uri = Array.from(this.props.song.uri)
        let songUri = uri.splice(0, 8)
        let formattedUri =  songUri.splice(5, 1, "/")
        let playerUri = formattedUri.join('')
        console.log(playerUri)
        return playerUri
    }
    render(){
        return (
            <Panel header="Now Playing"
                src="https://open.spotify.com/embed/{this.props.getUri()}" 
                width="300" height="380" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </Panel>      
        )
    }
}

export default NowPlaying;