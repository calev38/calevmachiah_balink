import React from 'react'
import './Sources.css'
import {Link} from 'react-router-dom'
import bbc from './Img/bbc.png'
import forecast from './Img/forecast.png'
import hamWeather from './Img/hamWeather.png'
import metOffice from './Img/metOffice.png'
import openWeather from './Img/openWeather.png'
import weatherUndergorund from './Img/weatherUndergorund.png'
import worldWeatherOnline from './Img/worldWeatherOnline.png'
 

export default function Sources() {
    return (
        <div className='sources2'>
      <h2>Sources</h2>
      <p><img src={bbc} /><a href='https://www.bbc.com/'>BBC</a></p>
      <p><img src={forecast} /><a href='https://darksky.net/forecast/40.7127,-74.0059/us12/en'>Forecast.io</a></p>
      <p><img src={hamWeather} /><a href='https://www.weather-forecast.com/locations/Ham/forecasts/latest'>HAMweather</a></p>
      <p><img src={metOffice} /><a href='https://www.bbc.com/'>Met Office</a></p>
      <p><img src={openWeather} /><a href='https://www.metoffice.gov.uk/'>OpenWeatherMap</a></p>
      <p><img src={weatherUndergorund} /><a href='https://www.wunderground.com/'>Weather Underground</a></p>
      <p><img src={worldWeatherOnline} /><a href='https://www.worldweatheronline.com/'>World Weather Online</a></p>
        </div>
    )
}
