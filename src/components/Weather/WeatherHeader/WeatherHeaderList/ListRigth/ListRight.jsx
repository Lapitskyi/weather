import React from 'react';
import './ListRigth.scss';
import PropTypes from "prop-types";


const ListRigth = (props) => {

    return (
        <>
            {
                <ul className="weather-header__list">

                    <li className="weather-header__list-item">
                        city
                        <span>{props.currentWeather?.name}</span>
                    </li>
                    <li className="weather-header__list-item">
                        temp
                        <span>
                            {`${props.tempWeather.tempWeatherCel}\u00B0C | ${props.tempWeather.tempWeatherFar}\u00B0F`}
                        </span>
                    </li>
                    <li className="weather-header__list-item">
                        feels like
                        <span>{`${props.tempWeather.feelsLike} \u00B0C`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        humidity
                        <span>{`${props.currentWeather?.main.humidity} \u0025`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunrise
                        <span>{`${props.tempWeather.sunrise}`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunset
                        <span>{`${props.tempWeather.sunset}`}</span>
                    </li>
                </ul>
            }
        </>
    )
}

export default ListRigth;

ListRigth.propTypes = {
    currentWeather: PropTypes.object
}