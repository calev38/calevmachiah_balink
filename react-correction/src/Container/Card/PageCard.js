
import React from 'react';
import './PageCard.css';
import Sources from '../Sources/Sources';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function PageCard() {

const navigate= useNavigate();   
const location = useLocation();
const { t, i18n } = useTranslation();
const dayjs = require('dayjs');
const today = dayjs().format('ddd D MMM');
const tomorrow = dayjs().add(1, 'day').format('ddd D MMM');


let {id, weatherName, weatherImg, arrow, day, numDay, month, min, max, speed, direction, pressure, humidity, visibility, confidence} = location.state;

direction = 'rotate(' + direction + 'deg)';
const rotate = {
    transform: direction,
    width: '12px'
}

    return (
<div className='allThePage'>
        <div className='container-cards1'>
        <div className="card1">
         <button id='couac' onClick={() =>navigate('/')}>&#x2190;</button> 

         <h4>{t(`${day + " " + numDay + " " + month == today ? 'Today' : day + " " + numDay + " " + month == tomorrow ? 'Tomorrow' : t(day) + " " + numDay + " " + t(month)}`)} </h4>

             <img src={weatherImg} />{t(weatherName)}
             <br/><br/>

             <p>{t('Min')}: {min}°C</p>
             <p>{t('Max')}: {max}°C</p>
     

         
 
            
            
             <p> <img style={rotate} src={arrow}/> {speed}mph
               </p>
              <br/>

              <p><strong>{t('Humidity')}</strong></p>
              <p>{humidity}%</p>
           
              <p><strong>{t('Visibility')}</strong></p>
              <p>{visibility} {t('miles')}</p>
           
              <p><strong>{t('Pressure')}</strong></p>
              <p>{pressure}mb</p>
              <br/>

              <p><strong>{t('Confidence')}</strong></p>
              <p>{confidence}%</p>
              <br/>
          

       
              </div>

<div className='elementSources'>
 <Sources/>    

</div>
</div>
</div>

        


    )
}
