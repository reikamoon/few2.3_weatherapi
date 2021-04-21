import React from 'react'
import './DisplayWeather.css'

function DisplayWeather(props) {
      if (props.cod !== 200) {
          return (
              <p><i class="fas fa-exclamation-circle"></i>{props.cod}: {props.message}</p>
          )
        }
    return (
        <div>
        <div className="temp">
        <h1>{props.temp}<img className="icon" src={props.icon} alt="icon"></img></h1>
        </div>
        <div className="cityname"><h1><i className="fas fa-city"></i>{props.name}</h1></div>
        <div className="param">
        <h2><i className="fas fa-wind"></i>Wind Speed: {props.wind}</h2>
        </div>
        <div className="desc">
        <h3>Description: {props.desc}</h3></div>
        </div>
    )
}

export default DisplayWeather