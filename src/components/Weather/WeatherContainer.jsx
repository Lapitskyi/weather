import React, {useEffect, useLayoutEffect} from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {addInputCity, getPositionClient, getWeather, getWeatherForecast} from "../../redux/weather-reducer";
import PropTypes from "prop-types";
import {compose} from "redux";


const WeatherContainer = (props) => {

    useLayoutEffect(()=>{
        props.getPositionClient()
    },[]);

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
        forecastWeather: state.weathers.forecastWeather,
        isLoader: state.weathers.isLoader
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




WeatherContainer.propTypes={
    inputText:PropTypes.string,
    currentWeather: PropTypes.object,
    forecastWeather: PropTypes.array,
    isLoader: PropTypes.bool
}