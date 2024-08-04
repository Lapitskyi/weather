import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    method: 'get',
    params: {
        'appid': `${process.env.REACT_APP_API_KEY_WEATHER || 51dad89eefad388f12dc3e66208be5c9}`
    },

});


export const weatherAPI = {
    getCurrentWeather(city) {
        return instance(`weather?q=${city}`)
            .then(response => {
                return response.data
            })
            .catch(err => {
                if (err.response) {
                    // client never received a response, or request never left
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    },

    getForecastWeather(city) {
        return instance(`forecast?q=${city}`)

            .then(response => {
                return response.data
            })
            .catch(err => {
                if (err.response) {
// client never received a response, or request never left
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    },


}
