import React, { Component } from 'react';

import TimeEvent from './TimeEvent'



class TimelineContainer extends Component {

  constructor() {
    super()
    this.state = {
    months: [Date('2019-12-01'), Date('2019-11-01')]
    }
  }
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
