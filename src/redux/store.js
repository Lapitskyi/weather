import {combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";


let reducers = combineReducers({
    weather : weatherReducer
})


let store = createStore(reducers);


export default store;