import {weatherAPI} from "../API/api";


const ADD_INPUT_CITY = 'ADD_INPUT_CITY';
const ADD_CURRENT_WEATHER = 'ADD_CURRENT_WEATHER';

let initialState = {
    currentWeather: null,
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

        default:
            return state;
    }
}


export const addInputCity = (text) => ({type: ADD_INPUT_CITY, text})
export const addCurrentWeather = (currentWeather) => ({type: ADD_CURRENT_WEATHER, currentWeather})

export const getWeather = (city) => {

    return (dispatch) => {
        weatherAPI.getCurrentWeather(city)
            .then(data => {
                dispatch(addCurrentWeather(data))
            })
    }
}

export default weatherReducer;