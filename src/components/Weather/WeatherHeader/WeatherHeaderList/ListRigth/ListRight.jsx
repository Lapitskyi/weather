import React from 'react';
import './ListRigth.scss';
import PropTypes from "prop-types";


const ListRigth = (props) => {

    const {
        tempWeatherCel,
        tempWeatherFar,
        feelsLike,
        sunRise,
        sunSet,
        name,
        humidity
    } = props.tempWeather;
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
                        <span>{`${humidity}` ? `${humidity} \u0025` : 'humidity'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunrise
                        <span>{sunRise ? sunRise : 'sunrise'}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunset
                        <span>{sunSet ? sunSet : 'sunset'}</span>
                    </li>
                </ul>
            }
        </>
    )
}

export default ListRigth;

ListRigth.propTypes = {
    currentWeather: PropTypes.object,
    tempWeather: PropTypes.object,
    name: PropTypes.string,
    main: PropTypes.object,
    tempWeatherCel: PropTypes.number,
    tempWeatherFar: PropTypes.number,
    feelsLike: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number
}