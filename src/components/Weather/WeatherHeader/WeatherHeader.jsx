import React from "react";
import './WeatherHeader.scss';
import ListLeft from "./WeatherHeaderList/ListLeft/ListLeft";
import ListRigth from "./WeatherHeaderList/ListRigth/ListRight";


const WeatherHeader = (props) => {

    return (
        <div className="weather__header">
            <div className="weather__header-item">

                <ListLeft
                    currentWeather={props.currentWeather}
                />

            </div>

            <div className="weather__header-item">
                <ListRigth/>
            </div>
        </div>
    )
}


export default WeatherHeader;