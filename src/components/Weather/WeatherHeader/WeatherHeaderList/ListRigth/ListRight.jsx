import React from 'react';
import './ListRigth.scss';
import PropTypes from "prop-types";


const ListRigth = (props) => {
    const {coord, weather, dt, main, wind, id, name, humidity, sys} = props.currentWeather || {}
    console.log(props.currentWeather)
    return (
        <ul className="weather-header__list">
            {props.currentWeather ?
                <>
                    <li className="weather-header__list-item">
                        city
                        <span>{name}</span>
                    </li>
                    <li className="weather-header__list-item">
                        coord
                        <a href={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${coord.lat}&lon=${coord.lon}&zoom=8`}>{`${coord.lat} ${coord.lon}`}</a>
                    </li>
                    <li className="weather-header__list-item">
                        temp
                        <span>{`${Math.round(main.temp - 273)} \u00B0C |
                                ${Math.round((main.temp - 273.15) * 9 / 5 + 32)}\u00B0F`}
                            </span>
                    </li>
                    <li className="weather-header__list-item">
                        feels like
                        <span>{`${Math.round(main['feels_like'] - 273)} \u00B0C`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        humidity
                        <span>{`${main.humidity} \u0025`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunrise
                        <span>{`${new Date(sys.sunrise * 1000).toLocaleTimeString('en-US')}`}</span>
                    </li>
                    <li className="weather-header__list-item">
                        sunset
                        <span>{`${new Date(sys.sunset * 1000).toLocaleTimeString('en-US')}`}</span>
                    </li>
                </>


                : <li className="weather-header__list-item">
                    WEATHER PARAMETERS
                </li>
            }
        </ul>

    )
}

export default ListRigth;

ListRigth.propTypes = {
    currentWeather: PropTypes.object

}