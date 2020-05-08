import React, { Component, Fragment } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'
import { Table } from 'rsuite';
import { List } from 'rsuite';
import NowPlaying from './NowPlaying';


const { Column, HeaderCell, Cell, Pagination } = Table;


class SongContainer extends Component {

  constructor() {
    super()
  
  }
    render() {
      const songs = this.props.songs.map(song => <NowPlaying song={song} key={song.id} />)
        return (
            <div>
              <Fragment>
                {songs}
              </Fragment>
              <Table
                height={400}
                data={this.props.songs}
                onRowClick={data => {
                  console.log(data);
                }}
              >
                <Column width={70} align="center" fixed>
                  <HeaderCell>Id</HeaderCell>
                  <Cell dataKey="id" />
                </Column>
      
                <Column width={200} fixed>
                  <HeaderCell>Title</HeaderCell>
                  <Cell dataKey="name" />
                </Column>
      
                <Column width={200}>
                  <HeaderCell>Artist</HeaderCell>
                  <Cell dataKey="artist" />
                </Column>
      
                <Column width={200}>
                  <HeaderCell>Duration</HeaderCell>
                  <Cell dataKey="duration" />
                </Column>

                <Column width={200}>
                  <HeaderCell>Spotify URI</HeaderCell>
                  <Cell dataKey="uri" />
                </Column>


                <Column width={120} fixed="right">
                  <HeaderCell>Play Song</HeaderCell>
      
                  <Cell>
                    <span>
                      <a onClick={() => this.props.selectSong(this.props.id)}> Select Song </a>
                    </span>                                
                    </Cell>
                </Column>
              </Table>
            </div>       
        );
    }
  }
    export default SongContainer;
