import React from 'react'
import Card from 'react-bootstrap/Card'
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'
import { Panel, PanelGroup } from 'rsuite';
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
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <img src={props.timePeriod.img_url} alt="playlist img" height="240" />
        <Panel header={props.timePeriod.year}>
          <p>
            <small>{props.timePeriod.month}</small>
          </p>
          <Button appearance="primary" onClick={() => props.setDates(props.timePeriod.year, monthObj[props.timePeriod.month])}>Grab Songs</Button>
        </Panel>
      </Panel>       
  )
  };

export default TimeEvent;