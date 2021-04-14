import React from 'react'
import './DisplayWeather.css'

function DisplayWeather(props) {
    return (
        <div>
        <h1>{props.name}</h1>
        <h1>{props.temp}</h1>
        <h2>{props.desc}</h2>
        </div>
    )
}

export default DisplayWeather