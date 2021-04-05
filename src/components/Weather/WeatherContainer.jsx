import React, {useLayoutEffect, useMemo} from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {
    addInputCity,
    errorWeather,
    getPositionClient,
    getWeather,
    getWeatherForecast
} from "../../redux/weather-reducer";
import PropTypes from "prop-types";
import {compose} from "redux";


const WeatherContainer = (props) => {

    useLayoutEffect(() => {
        props.getPositionClient()
    }, []);


    const tempWeather = useMemo(() => {
        if (props.currentWeather) {
            const dateWeather = new Date(props.currentWeather?.dt * 1000).toLocaleDateString();
            const dayWeather = new Date(props.currentWeather?.dt * 1000).toLocaleString('en', {weekday: 'long'});
            const tempWeatherCel = Math.round(props.currentWeather?.main?.temp - 273);
            const tempWeatherFar = Math.round((props.currentWeather?.main?.temp - 273.15) * 9 / 5 + 32);

            const feelsLike = Math.round((props.currentWeather?.main?.feels_like) - 273);
            const sunrise = new Date(props.currentWeather?.sys?.sunrise * 1000).toLocaleTimeString('en-US');
            const sunset = new Date(props.currentWeather?.sys?.sunset * 1000).toLocaleTimeString('en-US')

            return {dayWeather, dateWeather, tempWeatherCel, tempWeatherFar, feelsLike, sunrise, sunset};
        }
        return errorWeather;
    }, [props.currentWeather]);


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
        tempWeather={tempWeather}
        onInputCity={onInputCity}
        onSubmitCity={onSubmitCity}
        {...props}
    />
}

let mapStateToProps = (state) => {
    return {
        inputText: state.weathers.inputText,
        currentWeather: state.weathers.currentWeather,
        forecastWeather: state.weathers.forecastWeather,
        isLoader: state.weathers.isLoader,
        errorWeather: state.weathers.errorWeather
    }
}


export default compose(
    connect(mapStateToProps, {
        addInputCity,
        getWeather,
        getWeatherForecast,
        getPositionClient
    })
)(WeatherContainer)


WeatherContainer.propTypes = {
    inputText: PropTypes.string,
    currentWeather: PropTypes.object,
    forecastWeather: PropTypes.array,
    isLoader: PropTypes.bool
}