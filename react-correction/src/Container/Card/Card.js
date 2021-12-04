import React from "react"
import './Card.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import dayjs from 'dayjs'


export default function Card(props) {
   
    const { t, i18n } = useTranslation();

    const dayjs = require('dayjs');
    const today = dayjs().format('ddd D MMM');
    const tomorrow = dayjs().add(1, 'day').format('ddd D MMM');
    const direction = 'rotate(' + props.infos.direction + 'deg)';
    const rotate = {
        transform: direction,
        width: '12px'
    }
    const [toggle, setToggle] = useState(false);
    const changeState = () => {
       setToggle(!toggle);
    };

    return (


        <div className="card">
        
             <h4>{t(`${props.infos.day + " " + props.infos.numDay + " " + props.infos.month == today ? 'Today' : props.infos.day + " " + props.infos.numDay + " " + props.infos.month == tomorrow ? 'Tomorrow' : t(props.infos.day) + " " + props.infos.numDay + " " + t(props.infos.month)}`)} </h4>

             <img src={props.infos.weatherImg} />{t(props.infos.weatherName)}
             <br/><br/>

             <p>{t('Min')}: {props.infos.min}°C</p>
             <p>{t('Max')}: {props.infos.max}°C</p>
     

         
 
            
            
             <p> <img style={rotate} src={props.infos.arrow}/> {props.infos.speed}mph
               </p>
              <br/>

              <p><strong>{t('Humidity')}</strong></p>
              <p>{props.infos.humidity}%</p>
           
              <p><strong>{t('Visibility')}</strong></p>
              <p>{props.infos.visibility} {t('miles')}</p>
           
              <p><strong>{t('Pressure')}</strong></p>
              <p>{props.infos.pressure}mb</p>
              <br/>

              <p><strong>{t('Confidence')}</strong></p>
              <p>{props.infos.confidence}%</p>
              <br/>
        </div>

    )
}
