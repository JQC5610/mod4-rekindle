import React from 'react'



const Songs = (props) => {
    {var favorite_date = new Date(props.song.favorite_date)}
    {var favorite_date_year = favorite_date.getFullYear()}
    {var favorite_date_month = favorite_date.getMonth()}
    {var yMCombo = favorite_date_year + '' + favorite_date_month }

  return(
    <div>
      <h1> {props.song.name} </h1>
      <h3> {props.song.artist} </h3>
      <h3> {props.song.uri}</h3>
      {yMCombo}<br/>
    </div>
  )
  };

export default Songs;