import React from 'react';
import './WeatherFooter.scss'
import PropTypes from "prop-types";


const WeatherFooter = (props) => {

    return (
        <>
            {
                <div className="weather__footer">
                    <ul className="weather__footer-list">
                        {
                            props.tempWeatherFiveDays.map((list) =>
                                <li className="weather__footer-item" key={list.weatherDay}>
                                    <h4 className="weather__footer-title">
                                        {list.weatherDay}
                                        <span
                                            style={{display: "block"}}>{list.weatherDate}</span>
                                        <span>{list.weatherDescription}</span>
                                    </h4>
                                    <img className="weather__footer-img"
                                         src={`https://openweathermap.org/img/wn/${list.weatherIcon}@2x.png`}
                                         alt=""/>
                                    <div className="weather__footer-temperature">
                                        {`${list.weatherTempCel} \u00B0C /
                                ${list.weatherTempFar}\u00B0F`}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>

            }
        </>
    )
}


export default WeatherFooter;

WeatherFooter.propTypes = {
    tempWeatherFiveDays: PropTypes.array,
    weatherDay: PropTypes.number,
    weatherDate: PropTypes.number,
    weatherTempCel: PropTypes.number,
    weatherTempFar: PropTypes.number,
    weatherIcon: PropTypes.image,
    weatherDescription: PropTypes.number,
}