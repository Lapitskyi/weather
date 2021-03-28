import * as axios from "axios";


const instance = axios.create ({
    baseURL:`https://api.openweathermap.org/data/2.5/`,
    // header: {"API key":"88cbe4c153f69cbe03972ce91ccb4175"}

})


export const weatherAPI = {
    getCurrentWeather(city){
        return instance.get(`weather?q=${city}&appid=88cbe4c153f69cbe03972ce91ccb4175`)
            .then(response =>{
                return response.data
            })
            .catch(err => {
                if (err.response) {
                    return err.response.data
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    },

    getForecastWeather(city){
        return instance.get(`forecast?q=${city}&appid=88cbe4c153f69cbe03972ce91ccb4175`)
            .then(response =>{
                return response.data
            })
            .catch(err => {
                if (err.response) {
                    return err.response.data
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    }
}






