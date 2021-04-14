import React from 'react'
import { useState } from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'

function Weather() {
    const [zip, setZip] = useState('')
    const [data, setData] = useState(null)

    async function getWeather() {
        const apikey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
        const path= `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
        const res = await fetch(path)
        const json = await res.json()
        const temp = json.main.temp
        const desc = json.weather[0].description
        const name = json.name
        const main = json.weather[0].main
        const wind = json.wind.speed
        const icon = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
        console.log(json)
        setData({ temp, desc, name, main, wind, icon})
    }

    return (
        <div className="Weather">
        <h1>Weather App</h1>
        {data ? <DisplayWeather {...data}/>: null}
        <form
        onSubmit={e => {
            e.preventDefault()
            getWeather()
        }}>
        <input 
        placeholder="Enter your zip code..."
        value={zip}
        onChange={ e => setZip(e.target.value)}
        />
        <button>Submit</button>
        </form>
        
        </div>
    )
}

export default Weather
