import React, { Component, Fragment } from 'react';
// import Songs from './Songs'
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
        return (
          <div>
            <Table
              virtualized
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
    
              <Column width={130}>
                <HeaderCell>Title</HeaderCell>
                <Cell dataKey="name" />
              </Column>
    
              <Column width={130}>
                <HeaderCell>Artist</HeaderCell>
                <Cell dataKey="artist" />
              </Column>

              <Column width={130}>
                <HeaderCell>Spotify</HeaderCell>
                <Cell dataKey="uri" />
              </Column>
            </Table>
          </div>
        );
    }
  }
    export default SongContainer;
