import React, { Component } from 'react';

import TimeEvent from './TimeEvent'

class TimelineContainer extends Component {
    render() {
      const timelines = this.props.timePeriods.map(timePeriod => <TimeEvent key={timePeriod.id} timePeriod={timePeriod} />)
        return (
          <div>
            <h2>My Timeline</h2>
            {timelines}    
          </div>
        );
    }
  }
    export default TimelineContainer;
