import {weatherAPI} from "../API/api";


const ADD_INPUT_CITY = 'ADD_INPUT_CITY';
const ADD_CURRENT_WEATHER = 'ADD_CURRENT_WEATHER';
const ADD_FORECAST_WEATHER = 'ADD_FORECAST_WEATHER';
const ERROR_WEATHER = 'ERROR_WEATHER';

let initialState = {
    currentWeather: null,
    forecastWeather: null,
    inputText: ''
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_INPUT_CITY:
            return {
                ...state,
                inputText: action.text
            }

        case ADD_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather,
                inputText: ''
            }

        case ADD_FORECAST_WEATHER:
            return{
                ...state,
                forecastWeather:action.forecastWeather,
                inputText: ''
            }

        case ERROR_WEATHER:
            return {
                state,
                currentWeather: action.errorWeather,
                forecastWeather: action.errorWeather,
                inputText: ''
            }

        default:
            return state;
    }
}


export const addInputCity = (text) => ({type: ADD_INPUT_CITY, text})
export const addCurrentWeather = (currentWeather) => ({type: ADD_CURRENT_WEATHER, currentWeather})
export const addForecastWeather = (forecastWeather) => ({type: ADD_FORECAST_WEATHER, forecastWeather})
export const errorWeather = (errorWeather) => ({type:ERROR_WEATHER, errorWeather})


export const getWeather = (city) => {
    return (dispatch) => {
        weatherAPI.getCurrentWeather(city)
            .then(data => {
                dispatch(addCurrentWeather(data))
            })
            .catch(data => {
                dispatch(errorWeather(null))
            })
    }
}

export const getWeatherForecast = (city) => {
    return (dispatch) => {
        weatherAPI.getForecastWeather(city)
            .then(data => {
                dispatch(addForecastWeather(data.list))
            })
            .catch(data => {
                dispatch(errorWeather(null))
            })
    }
}

export default weatherReducer;