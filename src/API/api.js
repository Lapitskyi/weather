import * as axios from "axios";


const instance = axios.create ({
    baseURL:`http://api.openweathermap.org/data/2.5/forecast?`,
    header: {"API key":"88cbe4c153f69cbe03972ce91ccb4175"}

})


export const weatherAPI = {
    getWeather(){
        return instance.get(`q={city name}`)
            .then(response =>{
                return response.data
            })
    }
}






