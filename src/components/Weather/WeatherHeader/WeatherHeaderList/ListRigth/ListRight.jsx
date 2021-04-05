import React from 'react';
import './ListRigth.scss';
import PropTypes from "prop-types";


const ListRigth = (props) => {

    const {name, main} = props.currentWeather;
    const {tempWeatherCel, tempWeatherFar, feelsLike, sunrise, sunset} = props.tempWeather;
    return (
        <>
            {
                <ul className="weather-header__list">
                    <li className="weather-header__list-item">
                        city
                        <span>{name ? name : 'name'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        temp
                        <span>
                            {(`${tempWeatherCel}` && `${tempWeatherFar}`) ? `${tempWeatherCel}\u00B0C | ${tempWeatherFar}\u00B0F` : 'temp'}
                        </span>
                    </li>
                    <li className="weather-header__list-item">
                        feels like
                        <span>{`${feelsLike}` ? `${feelsLike} \u00B0C` : 'frelsLike'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        humidity
                        <span>{`${main.humidity}` ? `${main.humidity} \u0025` : 'humidity'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunrise
                        <span>{sunrise ? sunrise : 'sunrise'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunset
                        <span>{sunset ? sunset : 'sunset'}</span>
                    </li>
                </ul>
            }
        </>
    )
}

export default ListRigth;

ListRigth.propTypes = {
    currentWeather: PropTypes.object,
    tempWeather:PropTypes.object,
    name:PropTypes.string,
    main:PropTypes.object,
    tempWeatherCel:PropTypes.number,
    tempWeatherFar:PropTypes.number,
    feelsLike:PropTypes.number,
    sunrise:PropTypes.number,
    sunset:PropTypes.number
}