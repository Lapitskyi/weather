import React from 'react';
import "./Weather.scss"

import WeatherFooter from "./WeatherFooter/WeatherFooter";
import WeatherHeader from "./WeatherHeader/WeatherHeader";


const Weather = (props) => {
    return (
        <div className="weather">
            <div className="container">
                <div className="weather__inner">
                    <h2 className="weather__title">Weather sity</h2>
                    <WeatherHeader/>
                    <WeatherFooter/>
                </div>
            </div>
        </div>
    )
}

export default Weather;