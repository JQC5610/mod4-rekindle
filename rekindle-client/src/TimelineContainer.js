import React, { Component } from 'react';

import TimeEvent from './TimeEvent'



class TimelineContainer extends Component {

  constructor() {
    super()
    this.state = {
    }
  }
    render() {
      const timelines = this.props.timePeriods.map(timePeriod => <TimeEvent key={timePeriod.id} 
        timePeriod={timePeriod} setDates={this.props.setDates}/>)
        return (
          <div>
            <h2>My Timeline</h2>
            {timelines}    
          </div>
        );
    }
  }


    export default TimelineContainer;
