import React from 'react';
import './ListLeft.scss';


const ListLeft = (props) => {
    // const {weather, wind} = props.currentWeather
    return (

        <ul className="list-left">
            <li className="list-left__item">
                <img className="list-left__img"
                     src={props.currentWeather
                         ? `https://openweathermap.org/img/wn/${props.currentWeather.weather[0]['icon']}@2x.png`
                         : "https://via.placeholder.com/100"}
                     alt=""/>
            </li>
            <li className="list-left__item">
                <div className="list-left__date">{props.currentWeather
                    ? props.currentWeather.weather[0]['description']
                    : 'SUNDAY/ SUNNY'
                }</div>
            </li>
            <li className="list-left__item">
                <div className="list-left__param"> {props.currentWeather
                    ? `${props.currentWeather.wind.speed} m/s ${props.currentWeather.wind.deg} deg`
                    : '0m/s 0deg'}</div>
            </li>
            <li className="list-left__item">
                <div className="list-left__temperature">{props.currentWeather
                    ? `${Math.round(props.currentWeather.main.temp - 273)} \u00B0C /${Math.round((props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`
                    : "0C/0F"
                }</div>
            </li>
        </ul>

    )
}


export default ListLeft;