import React from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import { addInputCity, getWeather} from "../../redux/weather-reducer";



const WeatherContainer = (props) => {

    const onInputCity = (e) => {
        props.addInputCity(e.target.value)
    }

    const onSubmitCity = (e) => {
        e.preventDefault();
        let city = props.inputText.toLowerCase();

        props.getWeather(city);

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
        currentWeather:state.weathers.currentWeather
    }
}

export default connect(mapStateToProps,{
    addInputCity,
    getWeather
})(WeatherContainer)