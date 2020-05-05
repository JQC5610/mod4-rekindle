import React from 'react'


const TimeEvent = (props) => {
  return(
    <div>
      <h1> {props.timePeriod.year} </h1>
        <h3>{props.timePeriod.month}</h3>
            <img src={props.timePeriod.img_url} alt="month image" width="100%" />
    </div>
  )
  };

export default TimeEvent;