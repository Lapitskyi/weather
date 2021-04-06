import axios from "axios";


const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    header: {  'appid': 'process.env.REACT_APP_API_KEY_WEATHER'},
    param: {
        'appid': 'process.env.REACT_APP_API_KEY_WEATHER'
    }
});

export default instance;









