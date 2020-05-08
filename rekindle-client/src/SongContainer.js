import React, { Component, Fragment } from 'react';
import NowPlaying from './NowPlaying'
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;


class SongContainer extends Component {

  constructor() {
    super()
    this.state = {
      months: [Date('2019-12-01'), Date('2019-11-01')]
    }
  }
    render() {
      const songs = this.props.songs.map(song => <NowPlaying key={song.id} song={song} />)
        return (
          <Fragment>
            {songs}
            <div>
              <Table
                height={400}
                data={this.props.songs}
                // onRowClick={data => {
                //   console.log(data);
                // }}
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
                    {rowData => {
                      function handleAction() {
                        alert(`id:${rowData.id}`);
                      }
                      return (
                        <span>
                          <a onClick={handleAction}> Select </a>
                        </span>
                      );
                    }}
                  </Cell>
                </Column>
              </Table>
            </div> 
          </Fragment>         
        );
    }
  }
    export default SongContainer;
