import React from "react"
import './Card.css'



export default function Card(props) {



    return (


        <div className="card">
        
             <h4>{props.day}</h4>

             <img src={props.imageWeather} />{props.weatherName}
             <br/><br/>

             <p>Min: {props.min}°C</p>
             <p>Max: {props.max}°C</p>
            
            
             <p> <img style={{   width: '10px', transform: 'rotate(27deg)'}} src={props.arrow}/> {props.windSpeed}mph
               </p>
              <br/>

              <p><strong>Humidity</strong></p>
              <p>{props.humidity}%</p>
           
              <p><strong>Visibility</strong></p>
              <p>{props.visibility} miles</p>
           
              <p><strong>Pressure</strong></p>
              <p>{props.pressure}mb</p>
              <br/>

              <p><strong>Confidence</strong></p>
              <p>{props.confidence}%</p>
              <br/>
        </div>

    )
}
