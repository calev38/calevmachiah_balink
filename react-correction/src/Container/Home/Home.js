import {useState, useEffect} from 'react'
import React from "react"
import './Home.css'
import Card from '../Card/Card'
import PageCard from '../Card/PageCard'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { useTranslation } from "react-i18next";
import styled from 'styled-components'
import arrow from '../Sources/Img/arrow.png'

export default function Home() {
    
const { t, i18n } = useTranslation();

let dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone') ;
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);




const [monState, setMonState] = useState(610264);
const [allData, setAllData] = useState([]);
const [cityData, setCityData] = useState([]);


const ville = monState;
const url = 'https://www.metaweather.com/api/location/' + ville;



useEffect(() => {
     
async function fetchWeather() {    
const response = await fetch(url);
const data = await response.json();





if(Object.keys(data).length > 0 && data.consolidated_weather.length > 0) { 

data.consolidated_weather.pop();
const infoTemp = data.consolidated_weather.map(tempData => {
        return {
            
            id: tempData.id, 
            weatherName: tempData.weather_state_name,
            weatherImg: 'https://www.metaweather.com/static/img/weather/png/64/' + tempData.weather_state_abbr + '.png',
            arrow: arrow,
            day: dayjs(tempData.applicable_date).format('ddd'),
            numDay: dayjs(tempData.applicable_date).format('D'),
            month: dayjs(tempData.applicable_date).format('MMM'),
            min: Math.trunc(tempData.min_temp),
            max: Math.trunc(tempData.max_temp),
            speed: Math.trunc(tempData.wind_speed),
            direction: tempData.wind_direction,
            pressure: Math.trunc(tempData.air_pressure),
            humidity: Math.trunc(tempData.humidity),
            visibility: Math.round((tempData.visibility)*10)/10,
            confidence: Math.trunc(tempData.predictability)
        };
});


    setAllData(infoTemp);

    setCityData(data);

}};  

    fetchWeather();
    
},[url]);


const formCity = {
        textAlign: 'right', 
        margin: '30px'
};


const styleLink = {
        textDecoration : 'none', 
        color: 'black',
};

const littleCity = {
        fontSize: '16px', 
        fontWeight: '500'
};

const ParaTime = styled.p` 
font-weight: bold;
display: inline;
`;

let content = "Loading....";
let atime = dayjs.tz(cityData.time, cityData.timezone).format('LT');
let sunrise = dayjs.tz(cityData.sun_rise, cityData.timezone).format('LT');
let sunset = dayjs.tz(cityData.sun_set, cityData.timezone).format('LT');

console.log(dayjs.tz("2014-06-01 12:00", "Asia/Tokyo"));

if(allData.length > 0) {
        content = allData.map(myData =><Link style={styleLink} to= 'card1/two-days-later'  state={myData}> <Card infos={myData} /></Link>);

        };
        


    
    return (
        <>

<div>
            <form style={formCity} >
        
               
        <p>
            
                <select  onChange={(e) => {setMonState(e.target.value)}} name="city" id="city-select">
                <option value="">{t('Select a city')}</option>
                        <optgroup label={t('Europe')}>
                                
                                <option  value="610264">{t('Marseille')}</option>
                                <option  value="753692">{t('Barcelona')}</option>
                                <option  value="721943">{t('Rome')}</option>
                        </optgroup>
                        
                        <optgroup label={t('North America')}>
                                <option  value="2459115">{t('New York')}</option>
                                <option   value="2442047">{t('Los Angeles')}</option>
                        </optgroup>
                        <optgroup label={t('Asia')}>
                                <option value="560743">{t('Dublin')}</option>
                        </optgroup>
                        <optgroup label={t('Africa')}>
                                <option value="1532755">{t('Casablanca The Best')}</option>
                        </optgroup>
                        
                        
                </select>
        </p>

       
</form>
        </div>

        <div className='hour'>
        <div><ParaTime>{t('Time')} </ParaTime> {atime}</div>
        <div><ParaTime>{t('Sunrise')} </ParaTime> {sunrise}</div>
        <div><ParaTime>{t('Sunset')} </ParaTime> {sunset}</div>
        </div>

        <h1 className='home-title'>{t(cityData.title)}, <span style={littleCity}>  {t(cityData.title)} </span></h1>


     
        <div className="container-cards">{content}</div>
   
        

        
        </>

    )
    
    

    
       
    
}
