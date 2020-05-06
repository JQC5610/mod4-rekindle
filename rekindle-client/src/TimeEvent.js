import React from 'react'
import Card from 'react-bootstrap/Card'

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
      <Card id={props.timePeriod.id} className="bg-dark text-white">
        <Card.Img src={props.timePeriod.img_url} alt="Card image" className="Month-img"/>
        <Card.ImgOverlay>
          <Card.Title>{props.timePeriod.year}</Card.Title>
          <Card.Text>
            {props.timePeriod.month}
          </Card.Text>
          <Card.Text></Card.Text>
            <button onClick={() => props.setDates(props.timePeriod.year, monthObj[props.timePeriod.month])}>Grab Songs</button>
        </Card.ImgOverlay>
      </Card>    
  )
  };

export default TimeEvent;