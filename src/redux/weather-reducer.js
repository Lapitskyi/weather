import {weatherAPI} from "../service/weather";
import {positionAPI} from "../service/position";


const ADD_INPUT_CITY = 'ADD_INPUT_CITY';
const ADD_CURRENT_WEATHER = 'ADD_CURRENT_WEATHER';
const ADD_FORECAST_WEATHER = 'ADD_FORECAST_WEATHER';
const TOGGLE_ISLOADER = 'TOGGLE_ISLOADER';

let initialState = {
    currentWeather: null,
    forecastWeather: null,
    inputText: '',
    isLoader: false,

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
            return {
                ...state,
                forecastWeather: action.forecastWeather,
                inputText: ''
            }


        case TOGGLE_ISLOADER:
            return {
                ...state, isLoader: action.isLoader
            }


        default:
            return state;
    }
}


export const addInputCity = (text) => ({type: ADD_INPUT_CITY, text});
export const addCurrentWeather = (currentWeather) => ({type: ADD_CURRENT_WEATHER, currentWeather});
export const addForecastWeather = (forecastWeather) => ({type: ADD_FORECAST_WEATHER, forecastWeather});
export const toggleIsLoader = (isLoader) => ({type: TOGGLE_ISLOADER, isLoader});

export const getWeather = (city) => {
    return (dispatch) => {
        dispatch(toggleIsLoader(true))
        weatherAPI.getCurrentWeather(city)
            .then(data => {
                dispatch(toggleIsLoader(false))
                dispatch(addCurrentWeather(data))
            })
            .catch(() => {
                    dispatch(toggleIsLoader(false))
                }
            )
    }
}

export const getWeatherForecast = (city) => {
    return (dispatch) => {
        dispatch(toggleIsLoader(true))
        weatherAPI.getForecastWeather(city)
            .then(data => {
                dispatch(toggleIsLoader(false))
                dispatch(addForecastWeather(data.list))
            })
            .catch(() => {
                    dispatch(toggleIsLoader(false))
                }
            )
    }
}

export const getPositionClient = () => (dispatch) => {
    positionAPI.getPosition()
        .then(data => {
            dispatch(getWeather(data.location.city))
            dispatch(getWeatherForecast(data.location.city))
        })


}

export default weatherReducer;