import React from 'react';
import "./Weather.scss"

import WeatherFooter from "./WeatherFooter/WeatherFooter";
import WeatherHeader from "./WeatherHeader/WeatherHeader";
import SearchCity from "./SearchCity/SearchCity";
import Preloader from "../Preloader/Preloader";
import NotFound from "../Error/NotFound";



const Weather = (props) => {

    return (
        <div className="weather">
            <div className="container">
                <div className="weather__inner">
                    <SearchCity
                        inputText={props.inputText}
                        onInputCity={props.onInputCity}
                        onSubmitCity={props.onSubmitCity}
                    />

                    <h2 className="weather__title">Weather {props.tempWeather ? props.tempWeather.name : "city"}</h2>

                    {(props.isLoader ? <Preloader/> : null)
                    ||
                    ((props.tempWeather && props.tempWeatherFiveDays)? <>
                        <WeatherHeader tempWeather={props.tempWeather}/>
                        <WeatherFooter tempWeatherFiveDays={props.tempWeatherFiveDays}/>
                    </>:<NotFound/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Weather;