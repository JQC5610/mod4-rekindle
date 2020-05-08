import React, { Component, Fragment } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'


class Header extends Component {
    render() {
      
        return (
            <div className="header">
                <h1>ReKindle</h1>
                <h3>Rediscover Your Old Favorites</h3>
            </div>
        );
    }
  }
    export default Header;
