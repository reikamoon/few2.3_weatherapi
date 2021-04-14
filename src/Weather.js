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
        const test = json.weather[0].main
        console.log(json)
        setData({ temp, desc, name, test})
    }

    return (
        <div className="Weather">
        {data ? <DisplayWeather {...data}/>: null}
        <form onSubmit={e => {
            e.preventDefault()
            getWeather()
        }}>
        <input 
        value={zip}
        onChange={ e => setZip(e.target.value)}
        />
        <button>Submit</button>
        </form>
        
        </div>
    )
}

export default Weather
