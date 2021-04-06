import * as axios from "axios";


export const positionAPI ={
    getPosition() {
        return axios.get(`https://api.ipregistry.co/?key=${process.env.REACT_APP_API_KEY_POSITION}`)
            .then(response => {
                return response.data
            })
    }

}
