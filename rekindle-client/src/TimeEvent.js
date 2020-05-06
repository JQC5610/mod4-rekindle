import React from 'react'
import Card from 'react-bootstrap/Card'
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'
import { Button } from 'rsuite';


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
  october: 9,
  October: 9,
  november: 10,
  November: 10,
  december: 11,
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
          <Button appearance="primary" onClick={() => props.setDates(props.timePeriod.year, monthObj[props.timePeriod.month])}>Grab Songs</Button>
          <Card.Text></Card.Text>
            
        </Card.ImgOverlay>
      </Card>    
  )
  };

export default TimeEvent;