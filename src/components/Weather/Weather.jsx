import React from 'react';
import "./Weather.scss"

import WeatherFooter from "./WeatherFooter/WeatherFooter";
import WeatherHeader from "./WeatherHeader/WeatherHeader";
import SearchCity from "./SearchCity/SearchCity";
import Preloader from "../Preloader/Preloader";


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

                    <h2 className="weather__title">Weather {props.currentWeather ? props.currentWeather.name : "city"}</h2>

                    {props.isLoader ? <Preloader/>
                        :( (props.currentWeather && props.forecastWeather)&&<>
                            <WeatherHeader currentWeather={props.currentWeather}/>
                            <WeatherFooter forecastWeather={props.forecastWeather}/>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Weather;