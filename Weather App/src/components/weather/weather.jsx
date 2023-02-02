import axios from 'axios'
import React, { useState } from 'react'

export default function Weather() {

    let [weatherData, setWeatherData] = useState(null)
    let [cityName, setCityName] = useState(null)

    let func = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
            .then((res) => {
                setWeatherData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={func}>
                <input type="text" name="" id="" onChange={(e) => {
                    setCityName(e.target.value)
                }} />
                <button type='submit'>Submit</button>
            </form>
            {
                (weatherData === null) ? null :
                    <div>
                        <h1>{weatherData.main.temp_max}</h1>
                        <h1>{weatherData.main.temp_min}</h1>
                        <h1>{weatherData.main.feels_like}</h1>
                        <h1>{weatherData.main.pressure}</h1>
                        <h1>{weatherData.main.humidity}</h1>
                        <h1>{weatherData.name}</h1>
                    </div>
            }
        </div>
    )
}
