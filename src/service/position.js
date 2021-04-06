import instance from './api';


export const positionAPI ={
    getPosition() {
        return instance.get(`https://api.ipregistry.co/?key=${process.env.REACT_APP_API_KEY_POSITION}`)
            .then(response => {
                return response.data
            })
    }

}
