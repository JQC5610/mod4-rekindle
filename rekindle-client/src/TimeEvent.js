import React from 'react'

let monthObj = 
{
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
}

const TimeEvent = (props) => {
  return(
    <div>
      <h1> {props.timePeriod.year} </h1>
        <h3>{props.timePeriod.month}</h3>
            <img src={props.timePeriod.img_url} alt="month image" width="100%" />
          <button onClick={() => props.setDates(props.timePeriod.year, monthObj[props.timePeriod.month])}>
            Set Dates
          </button>
    </div>
  )
  };

export default TimeEvent;