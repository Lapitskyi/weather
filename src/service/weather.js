import instance from './api';

export const weatherAPI = {

    getCurrentWeather(city) {
        return instance.get(`weather?q=${city}&appid=${process.env.REACT_APP_VERCEL_ENV_API_KEY_WEATHER}`)
            .then(response => {
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

    getForecastWeather(city) {
        return instance.get(`forecast?q=${city}&appid=${process.env.REACT_APP_VERCEL_ENV_API_KEY_WEATHER}`)
            .then(response => {
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


}