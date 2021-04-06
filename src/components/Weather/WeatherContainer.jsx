import React, {useLayoutEffect, useMemo} from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {
    addInputCity,
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
            const {
                name,
                weather: [{icon, description}],
                wind: {speed, deg},
                dt,
                main: {temp, feels_like, humidity},
                sys: {sunrise, sunset}
            } = props.currentWeather ;

            const dateWeather = new Date(dt * 1000).toLocaleDateString();
            const dayWeather = new Date(dt * 1000).toLocaleString('en', {weekday: 'long'});
            const tempWeatherCel = Math.round(temp - 273);
            const tempWeatherFar = Math.round((temp - 273.15) * 9 / 5 + 32);

            const feelsLike = Math.round(feels_like - 273);
            const sunRise = new Date(sunrise * 1000).toLocaleTimeString('en-US');
            const sunSet = new Date(sunset * 1000).toLocaleTimeString('en-US')

            return {
                dayWeather,
                dateWeather,
                tempWeatherCel,
                tempWeatherFar,
                feelsLike,
                sunRise,
                sunSet,
                icon,
                description,
                speed,
                deg,
                name,
                humidity
            };

        }
    }, [props.currentWeather]);

    const tempWeatherFiveDays = useMemo(() => {
        if (props.forecastWeather) {
            return props.forecastWeather?.filter((item) =>
                new Date(item.dt * 1000).toLocaleTimeString() === '12:00:00'
            ).map(list => {
                    return {
                        weatherDay: new Date(list.dt * 1000).toLocaleString('en', {weekday: 'long'}),
                        weatherDate: new Date(list.dt * 1000).toLocaleDateString(),
                        weatherDescription: list.weather[0]['description'],
                        weatherIcon: list.weather[0]['icon'],
                        weatherTempCel: Math.round(list.main.temp - 273),
                        weatherTempFar: (Math.round((list.main.temp - 273.15) * 9 / 5 + 32))
                    }
                }
            )
        }
    }, [props.forecastWeather])


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
        tempWeatherFiveDays={tempWeatherFiveDays}
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
    isLoader: PropTypes.bool,
}
WeatherContainer.defaultProps = {
    name: 'city',
}