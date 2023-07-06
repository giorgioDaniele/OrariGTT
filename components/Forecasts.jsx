// LIBRARY IMPORTS
import React from 'react';
import { FlatList } from 'react-native'
// MY IMPORTS
import Forecast from './Forecast';


function Forecasts (props) {


  function renderForecast(props) {
    return (
        <Forecast
            line={props.item.line}
            hours={props.item.hours}>
        </Forecast>
    )
  }

  return (
    <FlatList 
      data={props.forecasts} 
      renderItem={renderForecast}/>
  )
}

export default Forecasts;