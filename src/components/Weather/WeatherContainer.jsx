import React from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {addInputCity, getWeather, getWeatherForecast} from "../../redux/weather-reducer";


const WeatherContainer = (props) => {

    const onInputCity = (e) => {
        props.addInputCity(e.target.value)
    }

    const onSubmitCity = (e) => {
        e.preventDefault();
        let city = props.inputText.toLowerCase();
        if (city !== '') {
            return props.getWeather(city),
            props.getWeatherForecast(city)
        }
    }

    return <Weather
        onInputCity={onInputCity}
        onSubmitCity={onSubmitCity}
        {...props}
    />
}

let mapStateToProps = (state) => {
    return {
        inputText: state.weathers.inputText,
        currentWeather: state.weathers.currentWeather,
        forecastWeather: state.weathers.forecastWeather
    }
}

export default connect(mapStateToProps, {
    addInputCity,
    getWeather,
    getWeatherForecast
})(WeatherContainer)